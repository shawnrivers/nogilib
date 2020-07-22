/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
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
import { Context } from 'client/store/app/context';
import { TextSwitchButton } from 'client/components/atoms/buttons/TextSwitchButton';
import { TextSwitchLink } from 'client/components/atoms/buttons/TextSwitchLink';

const CdGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-template-rows: auto;
  grid-gap: 40px;
  justify-content: center;
  max-width: 800px;
  margin: auto;
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
      <TextSwitchButton
        variant="h7"
        textOn="onBackground"
        isSwitchedOn={themeMode === 'light'}
        onClick={onClickLightTheme}
      >
        Light
      </TextSwitchButton>
      <Typography variant="h7" element="span">
        {' '}
        /{' '}
      </Typography>
      <TextSwitchButton
        variant="h7"
        textOn="onBackground"
        isSwitchedOn={themeMode === 'dark'}
        onClick={onClickDarkTheme}
      >
        Dark
      </TextSwitchButton>
      <Typography variant="h7" element="span">
        {' '}
        /{' '}
      </Typography>
      <TextSwitchButton
        variant="h7"
        textOn="onBackground"
        isSwitchedOn={themeMode === 'auto'}
        onClick={onClickAutoTheme}
      >
        Auto
      </TextSwitchButton>
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
            word-break: break-word;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <div>
          <TextSwitchLink
            variant="h2"
            to="/discography"
            isSwitchedOn={currentGroup === 'all'}
          >
            All
          </TextSwitchLink>
          <Typography variant="h2" element="span">
            {' '}
            /{' '}
          </Typography>
          <TextSwitchLink
            variant="h2"
            to="/discography?filter=singles"
            isSwitchedOn={currentGroup === 'singles'}
          >
            Singles
          </TextSwitchLink>
          <Typography variant="h2" element="span">
            {' '}
            /{' '}
          </Typography>
          <TextSwitchLink
            variant="h2"
            to="/discography?filter=albums"
            isSwitchedOn={currentGroup === 'albums'}
          >
            Albums
          </TextSwitchLink>
        </div>
      </Header>
      <Main>
        {cdGroupsByYear.map(cdGroup => (
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
        ))}
      </Main>
    </Container>
  );
};
