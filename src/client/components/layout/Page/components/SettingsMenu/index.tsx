import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BaseButton, BaseButtonRef } from 'client/components/atoms/BaseButton';
import { Card } from 'client/components/atoms/Card';
import { Divider } from 'client/components/atoms/Divider';
import { RadioCheckIcon } from 'client/components/atoms/icons/RadioCheckIcon';
import { SettingsIcon } from 'client/components/atoms/icons/SettingsIcon';
import { Typography } from 'client/components/atoms/Typography';
import { useOnClickOutside } from 'client/hooks/useOnClickOutside';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { Language } from 'client/types/language';
import { getNextIndex, getPreviousIndex } from 'utils/array';

const SETTING_MENU_BUTTON_ID = 'setting-menu-button';
const SETTING_MENU_ID = 'setting-menu';
const SETTING_MENU_ITEM_RADIO_CLASS = 'setting-menu-item';

const SettingHeading: React.FC<{ children: React.ReactNode }> = props => (
  <Typography
    variant="body2"
    as="p"
    bold
    css={css`
      text-transform: capitalize;
      text-align: center;
    `}
  >
    {props.children}
  </Typography>
);

type MenuItemRadioProps = {
  isSelected: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

type MenuItemRadioRef = BaseButtonRef;

const MenuItemRadio = React.forwardRef<MenuItemRadioRef, MenuItemRadioProps>(
  (props, ref) => {
    const { onClick, isSelected, children, ...buttonProps } = props;

    return (
      <BaseButton
        ref={ref}
        role="menuitemradio"
        aria-checked={isSelected}
        tabIndex={-1}
        disabled={isSelected}
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
        `}
        className={SETTING_MENU_ITEM_RADIO_CLASS}
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
          as="span"
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

export const SettingsMenu: React.FC = () => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const settingsButtonRef = React.useRef<BaseButtonRef>(null);

  const getSelectableItems = React.useCallback(
    (menuRef: React.RefObject<HTMLDivElement>) => {
      return (
        (menuRef.current?.querySelectorAll(
          `.${SETTING_MENU_ITEM_RADIO_CLASS}:not([disabled])`
        ) as HTMLButtonElement[] | undefined) ?? []
      );
    },
    []
  );

  const switchDropdown = React.useCallback(() => {
    toggleDropdown(!isDropdownOpen);

    if (!isDropdownOpen) {
      getSelectableItems(menuRef)[0]?.focus();
      setCurrentFocusedItemIndex(0);
    }
  }, [isDropdownOpen, getSelectableItems]);

  const hideDropdown = React.useCallback(
    () => toggleDropdown(false),
    [toggleDropdown]
  );

  useOnClickOutside(componentRef, hideDropdown);

  const { getTranslation } = useTranslations();

  const { themeMode, setTheme } = useThemeContext();

  const handleClickLightTheme = React.useCallback(() => {
    setTheme('light');
    toggleDropdown(false);
  }, [setTheme]);

  const handleClickDarkTheme = React.useCallback(() => {
    setTheme('dark');
    toggleDropdown(false);
  }, [setTheme]);

  const handleClickAutoTheme = React.useCallback(() => {
    setTheme('auto');
    toggleDropdown(false);
  }, [setTheme]);

  const router = useRouter();
  const { locale } = router;

  const handleSwitchLanguage = React.useCallback(
    (language: Language) => {
      document.cookie = `NEXT_LOCALE=${language}; expires=Fri, 31 Dec 9999 23:59:59 GMTl; path=/`;
      router.push(router.asPath, router.asPath, { locale: language });
      toggleDropdown(false);
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

  const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = React.useState<
    number | null
  >(null);

  const handleKeyDown = React.useCallback<React.KeyboardEventHandler>(
    event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        toggleDropdown(false);
        settingsButtonRef.current?.focus();
        setCurrentFocusedItemIndex(null);
      }

      const selectableItems = getSelectableItems(menuRef);

      if (selectableItems.length > 0) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          event.stopPropagation();
          toggleDropdown(true);
          const index =
            currentFocusedItemIndex !== null
              ? getNextIndex(currentFocusedItemIndex, selectableItems.length)
              : 0;
          selectableItems[index].focus();
          setCurrentFocusedItemIndex(index);
        }
        if (event.key === 'ArrowUp') {
          if (currentFocusedItemIndex !== null) {
            event.preventDefault();
            event.stopPropagation();
            const previousIndex = getPreviousIndex(
              currentFocusedItemIndex,
              selectableItems.length
            );
            selectableItems[previousIndex].focus();
            setCurrentFocusedItemIndex(previousIndex);
          }
        }
      }
    },
    [currentFocusedItemIndex, getSelectableItems]
  );

  React.useEffect(() => {
    // Trap focus when the dropdown is open
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      if (isDropdownOpen) {
        if (event.key === 'Tab') {
          event.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
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
        onKeyDown={handleKeyDown}
      >
        <SettingsIcon
          css={css`
            fill: var(${getColorVarName('onSurface', 'standard')});
            vertical-align: middle;
          `}
        />
      </BaseButton>
      <motion.div
        ref={menuRef}
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
          >
            <MenuItemRadio
              lang="en"
              isSelected={locale === 'en'}
              onKeyDown={handleKeyDown}
              onClick={handleClickEnglish}
            >
              English
            </MenuItemRadio>
            <MenuItemRadio
              lang="ja"
              isSelected={locale === 'ja'}
              onKeyDown={handleKeyDown}
              onClick={handleClickJapanese}
            >
              日本語
            </MenuItemRadio>
            <MenuItemRadio
              lang="zh"
              isSelected={locale === 'zh'}
              onKeyDown={handleKeyDown}
              onClick={handleClickChinese}
            >
              简体中文
            </MenuItemRadio>
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
            <MenuItemRadio
              isSelected={themeMode === 'dark'}
              onKeyDown={handleKeyDown}
              onClick={handleClickDarkTheme}
            >
              {getTranslation('dark')}
            </MenuItemRadio>
            <MenuItemRadio
              isSelected={themeMode === 'light'}
              onKeyDown={handleKeyDown}
              onClick={handleClickLightTheme}
            >
              {getTranslation('light')}
            </MenuItemRadio>
            <MenuItemRadio
              isSelected={themeMode === 'auto'}
              onKeyDown={handleKeyDown}
              onClick={handleClickAutoTheme}
            >
              {getTranslation('auto')}
            </MenuItemRadio>
          </div>
        </Card>
      </motion.div>
    </nav>
  );
};
