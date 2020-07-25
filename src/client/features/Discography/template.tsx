/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Message } from 'client/components/atoms/Message';
import { Typography } from 'client/components/atoms/Typography';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroup/TextSwitchLinkGroup';
import { ArtworkCard } from 'client/components/molecules/card/ArtworkCard';
import { Header, Main } from 'client/components/templates/Page';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';
import { useTheme } from 'client/styles/tokens';
import {
  DiscographyUrlFilter,
  getAlbumUrl,
  getDiscographyUrl,
} from 'client/utils/urls';
import { CdGroupByYear } from 'pages/discography';

export type DiscographyType = {
  currentFilter: DiscographyUrlFilter;
  cdGroupsByYear: CdGroupByYear[];
};

export const Discography: React.FC<DiscographyType> = props => {
  const { currentFilter, cdGroupsByYear } = props;
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
              isSwitchedOn: currentFilter === 'all',
              to: getDiscographyUrl(),
            },
            {
              text: <Message text="singles" />,
              isSwitchedOn: currentFilter === 'singles',
              to: getDiscographyUrl('singles'),
            },
            {
              text: <Message text="albums" />,
              isSwitchedOn: currentFilter === 'albums',
              to: getDiscographyUrl('albums'),
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
                  key={cd.key}
                  to={getAlbumUrl(cd.key)}
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
