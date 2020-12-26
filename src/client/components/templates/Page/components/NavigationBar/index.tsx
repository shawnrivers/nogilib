/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'client/components/atoms/Card';
import { MenuIcon } from 'client/components/atoms/icons/MenuIcon';
import { RadioCheckIcon } from 'client/components/atoms/icons/RadioCheckIcon';
import { SettingsIcon } from 'client/components/atoms/icons/SettingsIcon';
import { Surface } from 'client/components/atoms/Surface';
import { Typography } from 'client/components/atoms/Typography';
import { useLanguageContext } from 'client/store/language/hook';
import { useOnClickOutside } from 'client/hooks/useOnClickOutside';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getHomeUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { Divider } from 'client/components/atoms/Divider';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { BaseButton, BaseButtonRef } from 'client/components/atoms/BaseButton';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { MENU_BUTTON_ID } from 'client/constants/ids';
import { useThemeContext } from 'client/store/theme/hook';

const settingDropdownId = 'setting-dropdown';
const settingItemClass = 'setting-item';

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
      <li className={settingItemClass}>
        <BaseButton
          onClick={onClick}
          disabled={isSelected}
          css={css`
            display: flex;
            align-items: center;
            width: 100%;
          `}
          {...buttonProps}
          ref={ref}
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
      </li>
    );
  }
);

const Settings: React.FC = () => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false);
  const hideDropdown = React.useCallback(() => toggleDropdown(false), [
    toggleDropdown,
  ]);
  const switchDropdown = React.useCallback(
    () => toggleDropdown(!isDropdownOpen),
    [isDropdownOpen, toggleDropdown]
  );
  const componentRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(componentRef, hideDropdown);
  const languageListRef = React.useRef<HTMLUListElement>(null);
  const settingsButtonRef = React.useRef<BaseButtonRef>(null);

  const theme = useAppTheme();
  const { language, setLanguage } = useLanguageContext();
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

  const handleClickEnglish = React.useCallback(() => {
    setLanguage('en');
  }, [setLanguage]);

  const handleClickJapanese = React.useCallback(() => {
    setLanguage('ja');
  }, [setLanguage]);

  const handleClickChinese = React.useCallback(() => {
    setLanguage('zh');
  }, [setLanguage]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleDropdown(false);
        settingsButtonRef.current?.focus();
      }
    };

    if (isDropdownOpen) {
      const firstSelectableItem = languageListRef.current?.querySelector(
        `.${settingItemClass} > button:not([disabled])`
      ) as HTMLButtonElement | null;
      firstSelectableItem?.focus();

      document.addEventListener('keyup', handleEscape);
    } else {
      document.removeEventListener('keyup', handleEscape);
    }
  }, [isDropdownOpen]);

  return (
    <div
      ref={componentRef}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}
    >
      <BaseButton
        onClick={switchDropdown}
        aria-label={getTranslation('settings')}
        aria-controls={settingDropdownId}
        aria-haspopup
        ref={settingsButtonRef}
      >
        <SettingsIcon fill={theme.colors.theme.onSurface.standard} />
      </BaseButton>
      <motion.div
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
        id={settingDropdownId}
      >
        <Card elevation={componentElevationKey.dropdown} borderRadius="s">
          <SettingHeading>{getTranslation('languages')}</SettingHeading>
          <ul
            css={css`
              margin-top: ${commonStyles.spacing.xs};
            `}
            ref={languageListRef}
          >
            <SelectionItem
              isSelected={language === 'en'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickEnglish}
            >
              English
            </SelectionItem>
            <SelectionItem
              isSelected={language === 'ja'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickJapanese}
            >
              日本語
            </SelectionItem>
            <SelectionItem
              isSelected={language === 'zh'}
              tabIndex={isDropdownOpen ? 0 : -1}
              onClick={handleClickChinese}
            >
              简体中文
            </SelectionItem>
          </ul>
          <Divider
            lineColor={{ on: 'onSurface', variant: 'variant1' }}
            css={css`
              margin: ${commonStyles.spacing.s} 0;
            `}
          />
          <SettingHeading>{getTranslation('color theme')}</SettingHeading>
          <ul
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
          </ul>
        </Card>
      </motion.div>
    </div>
  );
};

export const NavigationBar: React.FC<{
  onOpenSidebar: () => void;
  menuButtonRef?: React.RefObject<BaseButtonRef>;
}> = props => {
  const theme = useAppTheme();
  const { getTranslation } = useTranslations();

  return (
    <header>
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
            padding: 0 ${commonStyles.spacing.l};
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <TextLink
              to={getHomeUrl()}
              typographyVariant="h6"
              showUnderline={false}
            >
              NOGILIB
            </TextLink>
            <Typography
              variant="h6"
              element="span"
              css={css`
                margin: 0 ${commonStyles.spacing.xs};
              `}
            >
              |
            </Typography>
            <nav>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
                className="large"
              >
                <TextLink
                  to={getDiscographyUrl()}
                  typographyVariant="h6"
                  showUnderline={false}
                  css={css`
                    text-transform: capitalize;
                  `}
                >
                  {getTranslation('discography')}
                </TextLink>
                <TextLink
                  to={getMembersUrl()}
                  typographyVariant="h6"
                  showUnderline={false}
                  css={css`
                    text-transform: capitalize;
                  `}
                >
                  {getTranslation('members')}
                </TextLink>
                <TextLink
                  to={getSearchUrl()}
                  typographyVariant="h6"
                  showUnderline={false}
                  css={css`
                    text-transform: capitalize;
                  `}
                >
                  {getTranslation('search')}
                </TextLink>
              </div>
              <BaseButton
                className="small"
                aria-label={getTranslation('menu')}
                aria-controls={MENU_BUTTON_ID}
                aria-haspopup
                onClick={props.onOpenSidebar}
                css={css`
                  margin-left: ${commonStyles.spacing.xxs};
                `}
                ref={props.menuButtonRef}
              >
                <MenuIcon fill={theme.colors.theme.onSurface.standard} />
              </BaseButton>
            </nav>
          </div>
          <Settings />
        </div>
      </Surface>
    </header>
  );
};
