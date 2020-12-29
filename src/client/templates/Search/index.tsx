/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import {
  SearchResultCategory,
  SearchResultCategoryProps,
} from 'client/templates/Search/components/SearchResultCategory';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useLanguageContext } from 'client/store/language/hooks/useLanguageContext';
import { PageHelmet } from 'client/layouts/PageHelmet';
import { SearchPageProps } from 'pages/search';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { getAlbumUrl, getMemberUrl, getSongUrl } from 'client/utils/urls';
import { toCdNumber } from 'utils/strings';

export const SearchPage: React.FC<SearchPageProps> = props => {
  const { query, onSearch, results } = props;

  const hasNoResult = React.useMemo(
    () => results.length === 0 && query !== '',
    [results, query]
  );

  const theme = useAppTheme();
  const { Translation, getTranslation } = useTranslations();
  const { language } = useLanguageContext();
  const { formatMemberName } = useIntl();

  const convertedResults = React.useMemo<{
    members: SearchResultCategoryProps['results'];
    cds: SearchResultCategoryProps['results'];
    songs: SearchResultCategoryProps['results'];
  }>(() => {
    let members = [];
    let cds = [];
    let songs = [];

    for (const result of results) {
      if (result.searchType === 'members') {
        const memberName = formatMemberName({
          firstName: result.nameNotations.firstName,
          lastName: result.nameNotations.lastName,
          firstNameEn: result.nameNotations.firstNameEn,
          lastNameEn: result.nameNotations.lastNameEn,
        });

        members.push({
          to: getMemberUrl(result.name),
          image: { fluid: result.profileImageFluid },
          heading: {
            text: memberName.name,
            lang: memberName.lang,
          },
          captions: [
            {
              text: getTranslation(`join: ${result.join}` as any),
              lang: language,
            },
          ],
        });
      }

      if (result.searchType === 'albums') {
        cds.push({
          to: getAlbumUrl(result.key),
          image: { fluid: result.artworkFluid },
          heading: { text: result.title, lang: 'ja' },
          captions: [
            {
              text: `${toCdNumber(result.number)} ${result.albumType}`,
              lang: 'en',
            },
          ],
        });
      }

      if (result.searchType === 'songs') {
        const captions = [
          { text: `${getTranslation(result.songType as any)}`, lang: language },
        ];

        if (result.single.number !== '') {
          captions.push({
            text: `${toCdNumber(result.single.number)} single`,
            lang: 'en',
          });
        } else {
          if (result.albums.length > 0) {
            captions.push({
              text: `${toCdNumber(result.albums[0].number)} album`,
              lang: 'en',
            });
          }
        }

        songs.push({
          to: getSongUrl(result.key),
          image: { fluid: result.artworkFluid },
          heading: { text: result.title, lang: 'ja' },
          captions,
        });
      }
    }

    return { members, cds, songs };
  }, [results, formatMemberName, getTranslation, language]);

  return (
    <>
      <PageHelmet title={getTranslation('search')} />
      <PageContent title={{ text: getTranslation('search'), lang: language }}>
        <div
          css={css`
            margin-top: ${commonStyles.spacing.xl};
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              max-width: 30em;
              margin: auto;
            `}
          >
            <Typography
              variant="body1"
              element="div"
              css={css`
                width: 100%;
                margin-left: 0.5em;
              `}
            >
              <input
                type="text"
                value={query}
                onChange={onSearch}
                placeholder={getTranslation(
                  'Search song title, member name, etc.'
                )}
                css={css`
                  width: 100%;
                  border-width: 2px;
                  border-style: solid;
                  border-color: ${theme.colors.theme.onBackground.variant1};
                  border-radius: ${theme.borderRadius.xl};
                  padding: ${theme.spacing.s};
                  transition: border-color 0.2s linear;
                  box-sizing: border-box;
                  color: inherit;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;

                  &::placeholder {
                    color: ${theme.colors.theme.onBackground.variant1};
                  }

                  &.focus-visible {
                    border-color: ${theme.colors.theme.onBackground.standard};
                  }
                `}
              />
            </Typography>
          </div>
          {hasNoResult ? (
            <Typography
              variant="em1"
              css={css`
                text-align: center;
                text-transform: capitalize;
                margin-top: 2em;
              `}
            >
              <Translation text="no result" />
            </Typography>
          ) : null}
          <SearchResultCategory
            title="members"
            titleElement="h2"
            results={convertedResults.members}
            css={css`
              margin-top: 2rem;
            `}
          />
          <SearchResultCategory
            title="cds"
            titleElement="h2"
            results={convertedResults.cds}
            css={css`
              margin-top: 2rem;
            `}
          />
          <SearchResultCategory
            title="songs"
            titleElement="h2"
            results={convertedResults.songs}
            css={css`
              margin-top: 2rem;
            `}
          />
        </div>
      </PageContent>
    </>
  );
};
