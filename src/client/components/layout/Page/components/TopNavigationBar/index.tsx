import { css } from '@emotion/react';
import * as React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Card } from 'client/components/atoms/Card';
import { RadioCheckIcon } from 'client/components/atoms/icons/RadioCheckIcon';
import { SettingsIcon } from 'client/components/atoms/icons/SettingsIcon';
import { Surface } from 'client/components/atoms/Surface';
import { Typography } from 'client/components/atoms/Typography';
import { useOnClickOutside } from 'client/hooks/useOnClickOutside';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { commonStyles } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getHomeUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/url';
import { Divider } from 'client/components/atoms/Divider';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { BaseButton, BaseButtonRef } from 'client/components/atoms/BaseButton';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { Language } from 'client/types/language';
import { getColorVarName } from 'client/styles/tokens/colors';

const SETTING_MENU_BUTTON_ID = 'setting-menu-button';
const SETTING_MENU_ID = 'setting-menu';
const SETTING_MENU_ITEM_CLASS = 'setting-menu-item';

const SettingHeading: React.FC = props => (
  <Typography
    variant="body2"
    element="p"
    bold
    css={css`
      text-transform: capitalize;
      text-align: center;
    `}
  >
    {props.children}
  </Typography>
);

type SelectionItemProps = {
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SelectionItemRef = BaseButtonRef;

const SelectionItem = React.forwardRef<SelectionItemRef, SelectionItemProps>(
  (props, ref) => {
    const { onClick, isSelected, children, ...buttonProps } = props;

    return (
      <BaseButton
        role="menuitemradio"
        aria-checked={isSelected}
        disabled={isSelected}
        ref={ref}
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
        `}
        className={SETTING_MENU_ITEM_CLASS}
        onClick={onClick}
        {...buttonProps}
      >
        <RadioCheckIcon
          isChecked={isSelected}
          unCheckColor="variant0"
          checkColor="purple1"
          width={20}
          height={20}
        />
        <Typography
          variant="body3"
          element="span"
          css={css`
            line-height: 24px;
            height: 24px;
            margin-left: ${commonStyles.spacing.xs};
            text-transform: capitalize;
          `}
        >
          {children}
        </Typography>
      </BaseButton>
    );
  }
);

const Settings: React.FC = () => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false);
  const hideDropdown = React.useCallback(
    () => toggleDropdown(false),
    [toggleDropdown]
  );
  const switchDropdown = React.useCallback(
    () => toggleDropdown(!isDropdownOpen),
    [isDropdownOpen, toggleDropdown]
  );
  const componentRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(componentRef, hideDropdown);
  const languageListRef = React.useRef<HTMLDivElement>(null);
  const settingsButtonRef = React.useRef<BaseButtonRef>(null);

  const { themeMode, setTheme } = useThemeContext();

  const { getTranslation } = useTranslations();

  const handleClickLightTheme = React.useCallback(() => {
    setTheme('light');
  }, [setTheme]);

  const handleClickDarkTheme = React.useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  const handleClickAutoTheme = React.useCallback(() => {
    setTheme('auto');
  }, [setTheme]);

  const router = useRouter();
  const { locale } = router;

  const handleSwitchLanguage = React.useCallback(
    (language: Language) => {
      document.cookie = `NEXT_LOCALE=${language}; expires=Fri, 31 Dec 9999 23:59:59 GMTl; path=/`;
      router.push(router.asPath, router.asPath, { locale: language });
    },
    [router]
  );
  const handleClickEnglish = React.useCallback(() => {
    handleSwitchLanguage('en');
  }, [handleSwitchLanguage]);
  const handleClickJapanese = React.useCallback(() => {
    handleSwitchLanguage('ja');
  }, [handleSwitchLanguage]);
  const handleClickChinese = React.useCallback(() => {
    handleSwitchLanguage('zh');
  }, [handleSwitchLanguage]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleDropdown(false);
        settingsButtonRef.current?.focus();
      }
    };

    if (isDropdownOpen) {
      const firstSelectableItem = languageListRef.current?.querySelector(
        `.${SETTING_MENU_ITEM_CLASS} > button:not([disabled])`
      ) as HTMLButtonElement | null;
      firstSelectableItem?.focus();

      document.addEventListener('keyup', handleEscape);
    } else {
      document.removeEventListener('keyup', handleEscape);
    }
  }, [isDropdownOpen]);

  return (
    <nav
      ref={componentRef}
      aria-label={getTranslation('settings')}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}
    >
      <BaseButton
        id={SETTING_MENU_BUTTON_ID}
        aria-label={getTranslation('settings')}
        aria-controls={SETTING_MENU_ID}
        aria-haspopup="dialog"
        ref={settingsButtonRef}
        onClick={switchDropdown}
      >
        <SettingsIcon
          css={css`
            fill: var(${getColorVarName('onSurface', 'standard')});
          `}
        />
      </BaseButton>
      <motion.div
        id={SETTING_MENU_ID}
        role="menu"
        aria-labelledby={SETTING_MENU_BUTTON_ID}
        initial={{ scale: 0, opacity: 0 }}
        style={{ originX: 1, originY: 0 }}
        animate={isDropdownOpen ? 'open' : 'closed'}
        variants={{
          open: { scale: 1, opacity: 1 },
          closed: { scale: 0, opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        css={css`
          position: absolute;
          top: calc(${commonStyles.sizes.navigationBarHeight} - 8px);
          min-width: 140px;
        `}
      >
        <Card elevation={componentElevationKey.dropdown} borderRadius="s">
          <SettingHeading>{getTranslation('languages')}</SettingHeading>
          <div
            role="group"
            css={css`
              margin-top: ${commonStyles.spacing.xs};
            `}
            ref={languageListRef}
          >
            <SelectionItem
              isSelected={locale === 'en'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickEnglish}
            >
              English
            </SelectionItem>
            <SelectionItem
              isSelected={locale === 'ja'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickJapanese}
            >
              日本語
            </SelectionItem>
            <SelectionItem
              isSelected={locale === 'zh'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickChinese}
            >
              简体中文
            </SelectionItem>
          </div>
          <Divider
            lineColor={{ on: 'onSurface', variant: 'variant1' }}
            css={css`
              margin: ${commonStyles.spacing.s} 0;
            `}
          />
          <SettingHeading>{getTranslation('color theme')}</SettingHeading>
          <div
            role="group"
            css={css`
              margin-top: ${commonStyles.spacing.xs};
            `}
          >
            <SelectionItem
              isSelected={themeMode === 'dark'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickDarkTheme}
            >
              {getTranslation('dark')}
            </SelectionItem>
            <SelectionItem
              isSelected={themeMode === 'light'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickLightTheme}
            >
              {getTranslation('light')}
            </SelectionItem>
            <SelectionItem
              isSelected={themeMode === 'auto'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickAutoTheme}
            >
              {getTranslation('auto')}
            </SelectionItem>
          </div>
        </Card>
      </motion.div>
    </nav>
  );
};

export const TopNavigationBar: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <Surface
      backgroundColor="standard"
      foregroundColor="standard"
      elevation={componentElevationKey.navigationBar}
      css={css`
        width: 100vw;
        height: ${commonStyles.sizes.navigationBarHeight};
        position: fixed;
        top: 0;
      `}
    >
      <div
        css={css`
          max-width: ${commonStyles.breakPoints.maxContent};
          height: 100%;
          margin: auto;
          padding-top: 0;
          padding-bottom: 0;
          padding-left: calc(
            ${commonStyles.spacing.l} + env(safe-area-inset-left)
          );
          padding-right: calc(
            ${commonStyles.spacing.l} + env(safe-area-inset-right)
          );
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <nav
          aria-label={getTranslation('page')}
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <TextLink
            href={getHomeUrl()}
            typographyVariant="h6"
            showUnderline={false}
          >
            NOGILIB
          </TextLink>
          <Typography
            variant="h6"
            element="span"
            className="large"
            css={css`
              margin: 0 ${commonStyles.spacing.xs};
            `}
          >
            |
          </Typography>
          <div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
              className="large"
            >
              <TextLink
                href={getDiscographyUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('discography')}
              </TextLink>
              <TextLink
                href={getMembersUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('members')}
              </TextLink>
              <TextLink
                href={getSearchUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('search')}
              </TextLink>
            </div>
          </div>
        </nav>
        <Settings />
      </div>
    </Surface>
  );
};
