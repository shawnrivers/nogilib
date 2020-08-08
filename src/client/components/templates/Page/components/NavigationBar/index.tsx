/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Card } from 'client/components/atoms/Card';
import { MenuIcon } from 'client/components/atoms/icons/MenuIcon';
import { RadioCheckIcon } from 'client/components/atoms/icons/RadioCheckIcon';
import { SettingsIcon } from 'client/components/atoms/icons/SettingsIcon';
import { Surface } from 'client/components/atoms/Surface';
import { Typography } from 'client/components/atoms/Typography';
import { useAppContext } from 'client/hooks/useAppContext';
import { useOnClickOutside } from 'client/hooks/useOnClickOutside';
import { componentElevationKey } from 'client/styles/elevation';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { Divider } from 'client/components/atoms/dividers/Divider';
import { TextLink } from 'client/components/molecules/links/TextLink';

const SelectionItem: React.FC<
  {
    isSelected: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const { onClick, isSelected, children, ...buttonProps } = props;

  return (
    <li
      css={css`
        &:not(:first-of-type) {
          margin-top: 0.2em;
        }
      `}
    >
      <button
        onClick={onClick}
        disabled={isSelected}
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
        `}
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
          `}
        >
          {children}
        </Typography>
      </button>
    </li>
  );
};

const Settings: React.FC = () => {
  const [isDropdownVisible, toggleDropdown] = React.useState(false);
  const hideDropdown = React.useCallback(() => toggleDropdown(false), [
    toggleDropdown,
  ]);
  const switchDropdown = React.useCallback(
    () => toggleDropdown(!isDropdownVisible),
    [isDropdownVisible, toggleDropdown]
  );
  const componentRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(componentRef, hideDropdown);

  const theme = useAppTheme();
  const { themeMode, language, setTheme, setLanguage } = useAppContext();

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

  return (
    <div
      ref={componentRef}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}
    >
      <button onClick={switchDropdown}>
        <SettingsIcon fill={theme.colors.theme.onSurface.standard} />
      </button>
      {isDropdownVisible && (
        <Card
          elevation={componentElevationKey.dropdown}
          borderRadius="s"
          css={css`
            position: absolute;
            top: calc(${commonStyles.sizes.navigationBarHeight} - 8px);
            min-width: 140px;
          `}
        >
          <Typography variant="body2" element="p">
            Languages
          </Typography>
          <ul
            css={css`
              margin-top: ${commonStyles.spacing.xs};
            `}
          >
            <SelectionItem
              isSelected={language === 'en'}
              onClick={handleClickEnglish}
            >
              English
            </SelectionItem>
            <SelectionItem
              isSelected={language === 'ja'}
              onClick={handleClickJapanese}
            >
              日本語
            </SelectionItem>
            <SelectionItem
              isSelected={language === 'zh'}
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
          <Typography variant="body2" element="p">
            Color Theme
          </Typography>
          <ul
            css={css`
              margin-top: ${commonStyles.spacing.xs};
            `}
          >
            <SelectionItem
              isSelected={themeMode === 'dark'}
              onClick={handleClickDarkTheme}
            >
              Dark
            </SelectionItem>
            <SelectionItem
              isSelected={themeMode === 'light'}
              onClick={handleClickLightTheme}
            >
              Light
            </SelectionItem>
            <SelectionItem
              isSelected={themeMode === 'auto'}
              onClick={handleClickAutoTheme}
            >
              Auto
            </SelectionItem>
          </ul>
        </Card>
      )}
    </div>
  );
};

export const NavigationBar: React.FC<{
  toggleSidebar: () => void;
}> = props => {
  const theme = useAppTheme();

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
            element="Link"
            to={getDiscographyUrl()}
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
          <TextLink
            element="Link"
            to={getDiscographyUrl()}
            typographyVariant="h6"
            showUnderline={false}
            className="large"
          >
            Discography
          </TextLink>
          <TextLink
            element="Link"
            to={getMembersUrl()}
            typographyVariant="h6"
            showUnderline={false}
            className="large"
          >
            Members
          </TextLink>
          <TextLink
            element="Link"
            to={getSearchUrl()}
            typographyVariant="h6"
            showUnderline={false}
            className="large"
          >
            Search
          </TextLink>
          <button className="small" onClick={props.toggleSidebar}>
            <MenuIcon fill={theme.colors.theme.onSurface.standard} />
          </button>
        </div>
        <Settings />
      </div>
    </Surface>
  );
};
