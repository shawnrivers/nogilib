/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { DiscographyResult } from 'server/actors/Discography/models';
import { Typography } from 'client/components/atoms/Typography';
import { useTheme } from 'client/styles/tokens';
import { FeatureCd } from 'client/features/Discography/components/molecules/FeaturedCd';
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
import { Context } from 'client/store/app/context';

const CdGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-template-rows: auto;
  grid-template-areas: 'featured featured featured';
  grid-gap: 40px;
  justify-content: center;
  max-width: 800px;
`;

const FeaturedCdContainer = styled.div`
  grid-area: featured;
`;

const LanguageControllers: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    onClickLightTheme(): void;
    onClickDarkTheme(): void;
    onClickAutoTheme(): void;
  }
> = props => {
  const {
    onClickLightTheme,
    onClickDarkTheme,
    onClickAutoTheme,
    ...restProps
  } = props;

  const { themeMode } = React.useContext(Context);

  return (
    <div {...restProps}>
      <Typography
        variant="h7"
        element="button"
        textColor={{
          on: 'onBackground',
          variant: themeMode === 'light' ? 'standard' : 'variant1',
        }}
        onClick={onClickLightTheme}
      >
        Light
      </Typography>
      <Typography variant="h7" element="span">
        {' '}
        /{' '}
      </Typography>
      <Typography
        variant="h7"
        element="button"
        textColor={{
          on: 'onBackground',
          variant: themeMode === 'dark' ? 'standard' : 'variant1',
        }}
        onClick={onClickDarkTheme}
      >
        Dark
      </Typography>
      <Typography variant="h7" element="span">
        {' '}
        /{' '}
      </Typography>
      <Typography
        variant="h7"
        element="button"
        textColor={{
          on: 'onBackground',
          variant: themeMode === 'auto' ? 'standard' : 'variant1',
        }}
        onClick={onClickAutoTheme}
      >
        Auto
      </Typography>
    </div>
  );
};

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
  onClickLightTheme(): void;
  onClickDarkTheme(): void;
  onClickAutoTheme(): void;
};

export const Discography: React.FC<DiscographyType> = props => {
  const { currentGroup, cdGroupsByYear } = props;
  const theme = useTheme();

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
              margin-bottom: 2ex;
            }
          `}
        >
          <li>
            <Link to="/discography">
              <Typography variant="h6" element="li">
                DISCOGRAPHY
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/members-list/first-gen">
              <Typography variant="h6" element="li">
                MEMBERS
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <Typography variant="h6" element="li">
                SEARCH
              </Typography>
            </Link>
          </li>
        </ul>
      </Navigation>
      <Settings>
        <LanguageControllers
          onClickLightTheme={props.onClickLightTheme}
          onClickDarkTheme={props.onClickDarkTheme}
          onClickAutoTheme={props.onClickAutoTheme}
          css={css`
            margin-bottom: 2ex;
          `}
        />
        <Typography variant="h7" element="div">
          EN / 日 / 中
        </Typography>
      </Settings>
      <Header>
        <Typography
          variant="h1"
          css={css`
            margin-bottom: 0.5ex;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <Typography
          variant="h2"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
        >
          <Link
            to="/discography"
            css={css`
              color: ${currentGroup === 'all'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            All
          </Link>{' '}
          /{' '}
          <Link
            to="/discography?filter=singles"
            css={css`
              color: ${currentGroup === 'singles'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            Singles
          </Link>{' '}
          /{' '}
          <Link
            to="/discography?filter=albums"
            css={css`
              color: ${currentGroup === 'albums'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            Albums
          </Link>
        </Typography>
      </Header>
      <Main>
        {cdGroupsByYear.map((cdGroup, i) => {
          if (i === 0) {
            const [featuredCd, ...restCds] = cdGroup.cds;

            return (
              <div key={cdGroup.year}>
                <TextDivider text={cdGroup.year} />
                <CdGroupContainer>
                  <FeaturedCdContainer>
                    <FeatureCd
                      artwork={featuredCd.artworks[0]}
                      title={featuredCd.title}
                      number={featuredCd.number}
                      type={featuredCd.type}
                      focusPerformers={featuredCd.songs[0].focusPerformers}
                      release={featuredCd.release}
                    />
                  </FeaturedCdContainer>
                  {restCds.map(cd => (
                    <NormalCd
                      key={cd.number}
                      artwork={cd.artworks[0]}
                      title={cd.title}
                      number={cd.number}
                      type={cd.type}
                      focusPerformers={cd.songs[0].focusPerformers}
                    />
                  ))}
                </CdGroupContainer>
              </div>
            );
          }

          return (
            <div key={cdGroup.year}>
              <TextDivider text={cdGroup.year} />
              <CdGroupContainer>
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
              </CdGroupContainer>
            </div>
          );
        })}
      </Main>
    </Container>
  );
};
