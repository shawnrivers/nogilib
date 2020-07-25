import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { TextSwitchButtonGroup } from 'client/components/molecules/buttonGroup/TextSwitchButtonGroup';
import { useAppContext } from 'client/hooks/useAppContext';
import { Theme, useTheme } from 'client/styles/tokens';

const BREAK_POINT = '54em';

type StyledComponentWithThemeProps = {
  theme: Theme;
};

const Container = styled.div<StyledComponentWithThemeProps>`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 800px) minmax(
      max-content,
      1fr
    );
  grid-template-rows: auto;
  grid-template-areas:
    'navigation header settings'
    'main main main';
  grid-gap: ${props => props.theme.spacing.l};
  padding: ${props => props.theme.spacing.l};

  @media screen and (max-width: ${BREAK_POINT}) {
    grid-template-areas:
      'header header header'
      'main main main';
  }
`;

const Navigation = styled.nav`
  grid-area: navigation;
  justify-self: end;
  padding-top: 1ex;

  @media screen and (max-width: ${BREAK_POINT}) {
    display: none;
  }
`;
const Settings = styled.div`
  grid-area: settings;
  justify-self: start;
  padding-top: 1ex;

  @media screen and (max-width: ${BREAK_POINT}) {
    display: none;
  }
`;

const NavigationAndSettings: React.FC = () => {
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
    <React.Fragment>
      <Navigation>
        <ul
          css={css`
            & > *:not(:last-child) {
              margin-bottom: 1em;
            }
          `}
        >
          <li>
            <Link to="/discography">
              <Typography variant="h6" element="span">
                DISCOGRAPHY
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/members">
              <Typography variant="h6" element="span">
                MEMBERS
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <Typography variant="h6" element="span">
                SEARCH
              </Typography>
            </Link>
          </li>
        </ul>
      </Navigation>
      <Settings>
        <TextSwitchButtonGroup
          variant="h7"
          textOn="onBackground"
          buttons={[
            {
              text: 'Light',
              isSwitchedOn: themeMode === 'light',
              onClick: handleClickLightTheme,
            },
            {
              text: 'Dark',
              isSwitchedOn: themeMode === 'dark',
              onClick: handleClickDarkTheme,
            },
            {
              text: 'Auto',
              isSwitchedOn: themeMode === 'auto',
              onClick: handleClickAutoTheme,
            },
          ]}
          css={css`
            margin-bottom: 1em;
          `}
        />
        <TextSwitchButtonGroup
          variant="h7"
          textOn="onBackground"
          buttons={[
            {
              text: 'EN',
              isSwitchedOn: language === 'en',
              onClick: handleClickEnglish,
            },
            {
              text: '日',
              isSwitchedOn: language === 'ja',
              onClick: handleClickJapanese,
            },
            {
              text: '中',
              isSwitchedOn: language === 'zh',
              onClick: handleClickChinese,
            },
          ]}
        />
      </Settings>
    </React.Fragment>
  );
};

export const Header = styled.header`
  grid-area: header;
  justify-self: start;
`;
export const Main = styled.main`
  grid-area: main;
`;

export const Page: React.FC = props => {
  const theme = useTheme();

  return (
    <Container
      css={css`
        background-color: ${theme.colors.theme.background.standard};
        min-height: 100vh;
      `}
    >
      <NavigationAndSettings />
      {props.children}
    </Container>
  );
};
