import { css } from '@emotion/react';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getSearchData } from 'client/api/search';
import { SearchPageData } from 'db/src/pages/search';
import { useSearchIndex } from 'client/libs/flexSearch/hook';
import { commonStyles } from 'client/styles/tokens';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useIntl } from 'client/i18n/hooks/useIntl';
import {
  SearchResultCategory,
  SearchResultCategoryProps,
} from 'client/components/pages/search/SearchResultCategory';
import { getAlbumUrl, getMemberUrl, getSongUrl } from 'client/utils/url';
import { toCdNumber } from 'utils/string';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/layout/PageContent';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { getColorVarName } from 'client/styles/tokens/colors';
import { useSearchQuery } from 'client/store/search/context';
import { BaseButton } from 'client/components/atoms/BaseButton';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { componentElevationKey } from 'client/styles/tokens/elevation';

type PageProps = {
  docs: (
    | SearchPageData['members'][0]
    | SearchPageData['albums'][0]
    | SearchPageData['songs'][0]
  )[];
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const searchData = await getSearchData();
  return {
    props: {
      docs: [...searchData.members, ...searchData.albums, ...searchData.songs],
    },
  };
};

function useSearch(docs: PageProps['docs']) {
  const index = useSearchIndex({
    docs,
    searchField: 'field',
    idField: 'id',
  });

  const { query, results, setQuery, setResults } = useSearchQuery();

  const search = React.useCallback(
    async (searchQuery: string) => {
      if (!index) {
        return;
      }

      const searchResults = await index.search(searchQuery);
      setResults(searchResults);
    },
    [index, setResults]
  );

  const handleSearch = React.useCallback(
    (searchQuery: string) => {
      setQuery(searchQuery);
      return search(searchQuery);
    },
    [setQuery, search]
  );

  const handleClear = React.useCallback(() => {
    return handleSearch('');
  }, [handleSearch]);

  React.useEffect(() => {
    if (query !== '') {
      search(query);
    }
  }, [query, search]);

  return { query, results, handleSearch, handleClear };
}

const SearchPage: React.FC<PageProps> = props => {
  const { docs } = props;
  const { query, results, handleSearch, handleClear } = useSearch(docs);
  const hasNoResult = results.length === 0 && query !== '';
  const handleChangeSearchQuery = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    e => {
      handleSearch(e.target.value);
    },
    [handleSearch]
  );

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const handleClickClearSearch = React.useCallback(async () => {
    await handleClear();
    searchInputRef.current?.focus();
  }, [handleClear]);

  const { Translation, getTranslation } = useTranslations();
  const { locale } = useRouter();
  const { formatMemberName, formatAlbumType } = useIntl();

  const convertedResults = React.useMemo<{
    members: SearchResultCategoryProps['results'];
    cds: SearchResultCategoryProps['results'];
    songs: SearchResultCategoryProps['results'];
  }>(() => {
    let members: SearchResultCategoryProps['results'] = [];
    let cds: SearchResultCategoryProps['results'] = [];
    let songs: SearchResultCategoryProps['results'] = [];

    for (const result of results) {
      if (result.searchType === 'members') {
        const memberName = formatMemberName({
          firstName: result.nameNotations.firstName,
          lastName: result.nameNotations.lastName,
          firstNameEn: result.nameNotations.firstNameEn,
          lastNameEn: result.nameNotations.lastNameEn,
        });

        members.push({
          href: getMemberUrl(result.name),
          image: result.profileImage,
          heading: {
            text: memberName.name,
            lang: memberName.lang,
          },
          captions: [
            {
              text: getTranslation(`join: ${result.join}` as any),
              lang: locale,
            },
          ],
        });
      }

      if (result.searchType === 'albums') {
        cds.push({
          href: getAlbumUrl(result.key),
          image: result.artwork,
          heading: { text: result.title, lang: 'ja' },
          captions: [
            {
              text: formatAlbumType(result.albumType, result.number),
              lang: locale,
            },
          ],
        });
      }

      if (result.searchType === 'songs') {
        const captions = [
          { text: `${getTranslation(result.songType as any)}`, lang: locale },
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
          href: getSongUrl(result.key),
          image: result.artwork,
          heading: { text: result.title, lang: 'ja' },
          captions,
        });
      }
    }

    return { members, cds, songs };
  }, [results, formatMemberName, getTranslation, locale, formatAlbumType]);

  return (
    <>
      <PageHelmet title={getTranslation('search')} />
      <PageContent title={{ text: getTranslation('search'), lang: locale }}>
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
                position: relative;
                width: 100%;
                margin-left: 0.5em;
              `}
            >
              <input
                type="text"
                value={query}
                onChange={handleChangeSearchQuery}
                placeholder={getTranslation(
                  'Search song title, member name, etc.'
                )}
                ref={searchInputRef}
                css={css`
                  width: 100%;
                  border-width: 3px;
                  border-style: solid;
                  border-color: var(
                    ${getColorVarName('onBackground', 'variant0')}
                  );
                  border-radius: ${commonStyles.borderRadius.xl};
                  padding: ${commonStyles.spacing.s} 3rem
                    ${commonStyles.spacing.s} ${commonStyles.spacing.s};
                  box-shadow: ${commonStyles.elevations[
                    componentElevationKey.background
                  ].boxShadow};
                  transition: border-color 0.2s linear, box-shadow 0.2s linear;
                  box-sizing: border-box;
                  color: inherit;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  overflow-x: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;

                  &::placeholder {
                    color: var(${getColorVarName('onBackground', 'variant1')});
                  }

                  &.focus-visible {
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                    border-color: var(
                      ${getColorVarName('onBackground', 'standard')}
                    );
                    box-shadow: ${commonStyles.elevations[
                      componentElevationKey.navigationBar
                    ].boxShadow};
                  }
                `}
              />
              {query !== '' && (
                <BaseButton
                  css={css`
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                  `}
                  onClick={handleClickClearSearch}
                >
                  <CloseIcon
                    width={24}
                    height={24}
                    title={getTranslation('clear')}
                    css={css`
                      vertical-align: middle;
                      fill: var(${getColorVarName('onBackground', 'standard')});
                    `}
                  />
                </BaseButton>
              )}
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

export default SearchPage;
