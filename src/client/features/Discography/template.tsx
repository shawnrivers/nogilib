/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroup/TextSwitchLinkGroup';
import { ArtworkCard } from 'client/components/molecules/card/ArtworkCard';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/atoms/dividers/TextDivider';
import { commonStyles } from 'client/styles/tokens';
import {
  DiscographyUrlFilter,
  getAlbumUrl,
  getDiscographyUrl,
} from 'client/utils/urls';
import { CdGroupByYear } from 'pages/discography';
import { useTranslations } from 'client/hooks/useTranslations';

export type DiscographyPageProps = {
  currentFilter: DiscographyUrlFilter;
  cdGroupsByYear: CdGroupByYear[];
};

export const DiscographyPage: React.FC<DiscographyPageProps> = props => {
  const { currentFilter, cdGroupsByYear } = props;
  const { Translation } = useTranslations();

  return (
    <PageContent title="discography">
      <React.Fragment>
        <TextSwitchLinkGroup
          variant="h2"
          textOn="onBackground"
          links={[
            {
              text: <Translation text="all" />,
              isSwitchedOn: currentFilter === 'all',
              to: getDiscographyUrl(),
            },
            {
              text: <Translation text="singles" />,
              isSwitchedOn: currentFilter === 'singles',
              to: getDiscographyUrl('singles'),
            },
            {
              text: <Translation text="albums" />,
              isSwitchedOn: currentFilter === 'albums',
              to: getDiscographyUrl('albums'),
            },
          ]}
          css={css`
            text-transform: capitalize;
          `}
        />
        {cdGroupsByYear.map(cdGroup => (
          <div key={cdGroup.year}>
            <TextDivider text={cdGroup.year} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                grid-template-rows: auto;
                grid-gap: ${commonStyles.spacing.m};
                justify-content: center;
                max-width: 60rem;
                margin: auto;
              `}
            >
              {cdGroup.cds.map(cd => (
                <ArtworkCard
                  key={cd.key}
                  to={getAlbumUrl(cd.key)}
                  artwork={cd.artworks[0].url}
                  number={cd.number}
                  type={cd.type}
                  title={cd.title}
                  surfaceColor="standard"
                  borderRadius="m"
                  padding="m"
                />
              ))}
            </div>
          </div>
        ))}
      </React.Fragment>
    </PageContent>
  );
};
