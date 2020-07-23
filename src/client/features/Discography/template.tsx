/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import { DiscographyResult } from 'server/actors/Discography/models';
import { Typography } from 'client/components/atoms/Typography';
import { useTheme } from 'client/styles/tokens';
import { NormalCd } from 'client/features/Discography/components/molecules/NormalCd';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';
import {
  Container,
  Navigation,
  Settings,
  Header,
  Main,
} from 'client/components/templates/Page';
import { FocusPerformers } from 'server/actors/Discography/types';
import { TextSwitchButtonGroup } from 'client/components/molecules/buttonGroups/TextSwitchButtonGroup';
import { ThemeMode } from 'client/types/themeMode';
import { Language } from 'client/types/language';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroups/TextSwitchLinkGroup';

export type CdGroupByYear = {
  year: number;
  cds: {
    title: DiscographyResult['title'];
    type: DiscographyResult['type'];
    number: DiscographyResult['number'];
    artworks: DiscographyResult['artworks'];
    release: DiscographyResult['release'];
    songs: {
      focusPerformers: FocusPerformers;
    }[];
    year: number;
  }[];
};

export type DiscographyType = {
  currentGroup: 'singles' | 'albums' | 'all';
  cdGroupsByYear: CdGroupByYear[];
  themeMode: ThemeMode;
  language: Language;
  onSwitchTheme(themeMode: ThemeMode): void;
  onSwitchLanguage(language: Language): void;
};

export const Discography: React.FC<DiscographyType> = props => {
  const {
    currentGroup,
    cdGroupsByYear,
    themeMode,
    language,
    onSwitchTheme,
    onSwitchLanguage,
  } = props;
  const theme = useTheme();

  const handleClickLightTheme = React.useCallback(() => {
    onSwitchTheme('light');
  }, [onSwitchTheme]);

  const handleClickDarkTheme = React.useCallback(() => {
    onSwitchTheme('dark');
  }, [onSwitchTheme]);

  const handleClickAutoTheme = React.useCallback(() => {
    onSwitchTheme('auto');
  }, [onSwitchTheme]);

  const handleClickEnglish = React.useCallback(() => {
    onSwitchLanguage('en');
  }, [onSwitchLanguage]);

  const handleClickJapanese = React.useCallback(() => {
    onSwitchLanguage('ja');
  }, [onSwitchLanguage]);

  const handleClickChinese = React.useCallback(() => {
    onSwitchLanguage('zh');
  }, [onSwitchLanguage]);

  return (
    <Container
      css={css`
        background-color: ${theme.colors.theme.background.standard};
      `}
    >
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
            <Link to="/members-list/first-gen">
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
      <Header>
        <Typography
          variant="h1"
          css={css`
            margin-bottom: 0.3em;
            word-break: break-word;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <TextSwitchLinkGroup
          variant="h2"
          textOn="onBackground"
          links={[
            {
              text: 'All',
              isSwitchedOn: currentGroup === 'all',
              to: '/discography',
            },
            {
              text: 'Singles',
              isSwitchedOn: currentGroup === 'singles',
              to: '/discography?filter=singles',
            },
            {
              text: 'Albums',
              isSwitchedOn: currentGroup === 'albums',
              to: '/discography?filter=albums',
            },
          ]}
        />
      </Header>
      <Main>
        {cdGroupsByYear.map(cdGroup => (
          <div key={cdGroup.year}>
            <TextDivider text={cdGroup.year} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                grid-template-rows: auto;
                grid-gap: 40px;
                justify-content: center;
                max-width: 800px;
                margin: auto;
              `}
            >
              {cdGroup.cds.map(cd => (
                <NormalCd
                  key={cd.number}
                  artwork={cd.artworks[0]}
                  number={cd.number}
                  type={cd.type}
                  title={cd.title}
                  focusPerformers={cd.songs[0].focusPerformers}
                />
              ))}
            </div>
          </div>
        ))}
      </Main>
    </Container>
  );
};
