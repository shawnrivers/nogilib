/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getSearchData } from 'api/search';
import { SearchPageData } from 'server/pages/search';
import { useSearchIndex } from 'client/libs/flexSearch/hook';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useIntl } from 'client/i18n/hooks/useIntl';
import {
  SearchResultCategory,
  SearchResultCategoryProps,
} from 'client/components/pages/search/SearchResultCategory';
import { getAlbumUrl, getMemberUrl, getSongUrl } from 'client/utils/urls';
import { toCdNumber } from 'utils/strings';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { PageHelmet } from 'client/layouts/PageHelmet';

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

const SearchPage: React.FC<PageProps> = props => {
  const { docs } = props;

  const index = useSearchIndex({
    docs,
    searchField: 'field',
    idField: 'id',
  });

  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<PageProps['docs']>([]);

  const handleSearch = React.useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!index) {
        return;
      }

      const searchQuery = event.target.value;
      setQuery(searchQuery);

      const searchResults = await index.search(searchQuery);
      setResults(searchResults);
    },
    [index]
  );

  const hasNoResult = results.length === 0 && query !== '';

  const theme = useAppTheme();
  const { Translation, getTranslation } = useTranslations();
  const { locale } = useRouter();
  const { formatMemberName } = useIntl();

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
              text: `${toCdNumber(result.number)} ${result.albumType}`,
              lang: 'en',
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
  }, [results, formatMemberName, getTranslation, locale]);

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
                width: 100%;
                margin-left: 0.5em;
              `}
            >
              <input
                type="text"
                value={query}
                onChange={handleSearch}
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

// export const query = graphql`
//   {
//     allSearchJson {
//       nodes {
//         albums {
//           id
//           field
//           searchType
//           key
//           title
//           number
//           albumType
//           artwork {
//             childImageSharp {
//               gatsbyImageData(width: 135, layout: CONSTRAINED)
//             }
//           }
//         }
//         songs {
//           id
//           field
//           searchType
//           key
//           title
//           songType
//           single {
//             title
//             number
//           }
//           albums {
//             title
//             number
//           }
//           artwork {
//             childImageSharp {
//               gatsbyImageData(width: 135, layout: CONSTRAINED)
//             }
//           }
//         }
//         members {
//           id
//           field
//           searchType
//           name
//           nameNotations {
//             lastName
//             lastNameEn
//             lastNameFurigana
//             firstName
//             firstNameEn
//             firstNameFurigana
//           }
//           join
//           profileImage {
//             childImageSharp {
//               gatsbyImageData(width: 135, layout: CONSTRAINED)
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// type SearchPageDataNode = {
//   albums: (Omit<SearchPageData['albums'][0], 'artwork'> & {
//     artwork: {
//       childImageSharp: {
//         gatsbyImageData: IGatsbyImageData;
//       };
//     };
//   })[];
//   songs: (Omit<SearchPageData['songs'][0], 'artwork'> & {
//     artwork: {
//       childImageSharp: {
//         gatsbyImageData: IGatsbyImageData;
//       };
//     };
//   })[];
//   members: (Omit<SearchPageData['members'][0], 'profileImage'> & {
//     profileImage: {
//       childImageSharp: {
//         gatsbyImageData: IGatsbyImageData;
//       };
//     };
//   })[];
// };

// type AlbumSearchDoc = Omit<SearchPageDataNode['albums'][0], 'artwork'> & {
//   artworkFluid: IGatsbyImageData;
// };
// type SongSearchDoc = Omit<SearchPageDataNode['songs'][0], 'artwork'> & {
//   artworkFluid: IGatsbyImageData;
// };
// type MemberSearchDoc = Omit<
//   SearchPageDataNode['members'][0],
//   'profileImage'
// > & {
//   profileImageFluid: IGatsbyImageData;
// };

// type SearchDoc = AlbumSearchDoc | SongSearchDoc | MemberSearchDoc;

// export interface SearchPageProps {
//   query: string;
//   results: SearchDoc[];
//   onSearch: (event: React.ChangeEvent<HTMLInputElement>) => any;
// }

// const SearchPageContainer: React.FC<{
//   data: {
//     allSearchJson: {
//       nodes: SearchPageDataNode[];
//     };
//   };
// }> = props => {
//   const searchData = props.data.allSearchJson.nodes[0];

//   const docs = React.useMemo<SearchDoc[]>(() => {
//     const albums = searchData.albums.map(({ artwork, ...rest }) => ({
//       ...rest,
//       artworkFluid: artwork.childImageSharp.gatsbyImageData,
//     }));
//     const songs = searchData.songs.map(({ artwork, ...rest }) => ({
//       ...rest,
//       artworkFluid: artwork.childImageSharp.gatsbyImageData,
//     }));
//     const members = searchData.members.map(({ profileImage, ...rest }) => ({
//       ...rest,
//       profileImageFluid: profileImage.childImageSharp.gatsbyImageData,
//     }));
//     return [...albums, ...songs, ...members];
//   }, [searchData]);

//   const index = useSearchIndex({
//     docs,
//     searchField: 'field',
//     idField: 'id',
//   });

//   const [query, setQuery] = React.useState('');
//   const [results, setResults] = React.useState<SearchDoc[]>([]);

//   const handleSearch = React.useCallback(
//     async (event: React.ChangeEvent<HTMLInputElement>) => {
//       if (!index) {
//         return;
//       }

//       const searchQuery = event.target.value;
//       setQuery(searchQuery);

//       const searchResults = await index.search(searchQuery);
//       setResults(searchResults);
//     },
//     [index]
//   );

//   return <SearchPage query={query} results={results} onSearch={handleSearch} />;
// };

export default SearchPage;

// export default () => <h1>Search</h1>;
