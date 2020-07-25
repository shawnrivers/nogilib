/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Message } from 'client/components/atoms/Message';
import { Typography } from 'client/components/atoms/Typography';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroup/TextSwitchLinkGroup';
import { ArtworkCard } from 'client/components/molecules/card/ArtworkCard';
import { Header, Main } from 'client/components/templates/Page';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';
import { DiscographyResult } from 'server/actors/Discography/models';
import { FocusPerformers } from 'server/actors/Discography/types';
import { useTheme } from 'client/styles/tokens';

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
};

export const Discography: React.FC<DiscographyType> = props => {
  const { currentGroup, cdGroupsByYear } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Header>
        <Typography
          variant="h1"
          css={css`
            margin-bottom: 0.3em;
            word-break: break-word;
            line-height: 1;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <TextSwitchLinkGroup
          variant="h2"
          textOn="onBackground"
          links={[
            {
              text: <Message text="all" />,
              isSwitchedOn: currentGroup === 'all',
              to: '/discography',
            },
            {
              text: <Message text="singles" />,
              isSwitchedOn: currentGroup === 'singles',
              to: '/discography?filter=singles',
            },
            {
              text: <Message text="albums" />,
              isSwitchedOn: currentGroup === 'albums',
              to: '/discography?filter=albums',
            },
          ]}
          css={css`
            text-transform: capitalize;
          `}
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
                grid-gap: ${theme.spacing.xl};
                justify-content: center;
                max-width: 800px;
                margin: auto;
              `}
            >
              {cdGroup.cds.map(cd => (
                <ArtworkCard
                  key={cd.number}
                  artwork={cd.artworks[0]}
                  number={cd.number}
                  type={cd.type}
                  title={cd.title}
                  elevation={3}
                  surfaceColor="standard"
                  borderRadius="m"
                  padding="m"
                />
              ))}
            </div>
          </div>
        ))}
      </Main>
    </React.Fragment>
  );
};
