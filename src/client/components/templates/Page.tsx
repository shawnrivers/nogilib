import { css } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
// import { TextSwitchButtonGroup } from 'client/components/molecules/buttonGroup/TextSwitchButtonGroup';
import { useAppContext } from 'client/hooks/useAppContext';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { Surface } from 'client/components/atoms/Surface';
import { SettingsIcon } from 'client/components/atoms/icons/SettingsIcon';
import { MenuIcon } from 'client/components/atoms/icons/MenuIcon';
import { useOnClickOutside } from 'client/hooks/useOnClickOutside';
import { Card } from 'client/components/atoms/Card';
import { RadioCheckIcon } from 'client/components/atoms/icons/RadioCheckIcon';
import { useSidebar } from 'client/hooks/useSidebar';
import { componentElevationKey } from 'client/styles/elevation';

const SelectionItem: React.FC<
  {
    isSelected: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const { onClick, isSelected, children, ...buttonProps } = props;

  return (
    <li>
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
          variant="body2"
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
        <div
          css={css`
            position: absolute;
            top: calc(${commonStyles.sizes.navigationBarHeight} - 8px);
            z-index: ${theme.elevation[componentElevationKey.dropdown].zIndex};
            min-width: 160px;
          `}
        >
          <Card elevation={12} borderRadius="s">
            <Typography variant="body1" element="p">
              Languages
            </Typography>
            <ul
              css={css`
                margin-top: ${commonStyles.spacing.xs};

                & > *:not(:first-child) {
                  margin-top: 0.2em;
                }
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
            <hr
              css={css`
                margin: ${commonStyles.spacing.s} 0;
              `}
            />
            <Typography variant="body1" element="p">
              Color Theme
            </Typography>
            <ul
              css={css`
                margin-top: ${commonStyles.spacing.xs};

                & > *:not(:first-child) {
                  margin-top: 0.2em;
                }
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
        </div>
      )}
    </div>
  );
};

const NavigationBar: React.FC<{
  toggleSidebar: () => void;
}> = props => {
  const theme = useAppTheme();

  return (
    <Surface
      backgroundColor="standard"
      foregroundColor="standard"
      elevation={10}
      css={css`
        width: 100vw;
        height: ${commonStyles.sizes.navigationBarHeight};
        position: fixed;
        top: 0;
        z-index: ${theme.elevation[componentElevationKey.navigationBar].zIndex};
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

            & > *:not(:last-child) {
              margin-right: 1em;
            }
          `}
        >
          <Link to={getDiscographyUrl()}>
            <Typography variant="h6" element="span">
              NOGILIB
            </Typography>
          </Link>
          <Typography variant="h6" element="span">
            |
          </Typography>
          <Link to={getDiscographyUrl()} className="large">
            <Typography variant="h6" element="span">
              Discography
            </Typography>
          </Link>
          <Link to={getMembersUrl()} className="large">
            <Typography variant="h6" element="span">
              Members
            </Typography>
          </Link>
          <Link to={getSearchUrl()} className="large">
            <Typography variant="h6" element="span">
              Search
            </Typography>
          </Link>
          <button className="small" onClick={props.toggleSidebar}>
            <MenuIcon />
          </button>
        </div>
        <Settings />
      </div>
    </Surface>
  );
};

export const PageContent: React.FC<{
  header?: React.ReactNode;
}> = props => {
  return (
    <div
      css={css`
        padding-top: calc(
          ${commonStyles.sizes.navigationBarHeight} + ${commonStyles.spacing.m} +
            env(safe-area-inset-top)
        );
        padding-left: ${commonStyles.spacing.m};
        padding-right: ${commonStyles.spacing.m};
        padding-bottom: calc(
          ${commonStyles.spacing.xxl} + env(safe-area-inset-bottom)
        );
      `}
    >
      {props.header !== undefined && (
        <header
          css={css`
            max-width: ${commonStyles.sizes.contentMaxWidth};
            margin: auto;
          `}
        >
          {props.header}
        </header>
      )}
      <main
        css={css`
          max-width: ${commonStyles.sizes.contentMaxWidth};
          margin: auto;
        `}
      >
        {props.children}
      </main>
    </div>
  );
};

export const Page: React.FC = props => {
  const theme = useAppTheme();
  const { toggleSidebar, SideBar } = useSidebar();

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};
        min-height: 100vh;

        & .large {
          display: inherit;
        }

        & .small {
          display: none;
        }

        @media screen and (max-width: ${theme.breakPoints.sp}) {
          & .large {
            display: none;
          }

          & .small {
            display: inherit;
          }
        }
      `}
    >
      <NavigationBar toggleSidebar={toggleSidebar} />
      <SideBar />
      {props.children}
    </div>
  );
};
