/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { ArtworkCard } from 'client/components/molecules/cards/ArtworkCard';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { commonStyles } from 'client/styles/tokens';
import { getAlbumUrl, getDiscographyUrl } from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';
import { useLanguageContext } from 'client/store/language/hook';
import { PageHelmet } from 'client/layouts/PageHelmet';
import { DiscographyPageProps } from 'client/features/Discography/container';

export const DiscographyPage: React.FC<DiscographyPageProps> = props => {
  const { currentFilter, cdGroupsByYear } = props;
  const { Translation, getTranslation } = useTranslations();
  const { language } = useLanguageContext();

  return (
    <>
      <PageHelmet title={getTranslation('discography')} />
      <PageContent
        title={{ text: getTranslation('discography'), lang: language }}
      >
        <>
          <TextSwitchLinkGroup
            variant="h4"
            textOn="onBackground"
            capitalize
            links={[
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
              {
                text: <Translation text="all" />,
                isSwitchedOn: currentFilter === 'all',
                to: getDiscographyUrl('all'),
              },
            ]}
            css={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              text-transform: capitalize;
            `}
          />
          {cdGroupsByYear.map(cdGroup => (
            <section key={cdGroup.year}>
              <TextDivider text={cdGroup.year} element="h2" />
              <ul
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  margin: auto;
                `}
              >
                {cdGroup.cds.map(cd => (
                  <li key={cd.key}>
                    <ArtworkCard
                      to={getAlbumUrl(cd.key)}
                      artworkFluid={cd.artwork.childImageSharp.fluid}
                      number={cd.number}
                      type={cd.type}
                      title={cd.title}
                      titleElement="h3"
                      borderRadius="s"
                      padding="s"
                      css={css`
                        width: 175px;
                        margin: ${commonStyles.spacing.xs};
                      `}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      </PageContent>
    </>
  );
};
