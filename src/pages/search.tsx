import * as React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { SearchPage } from 'client/templates/Search';
import { SearchPageData } from 'server/pages/search';
import { useSearchIndex } from 'client/libs/flexSearch/hook';

export const query = graphql`
  query {
    allSearchJson {
      nodes {
        albums {
          id
          field
          searchType
          key
          title
          number
          albumType
          artwork {
            childImageSharp {
              fluid(maxWidth: 135) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        songs {
          id
          field
          searchType
          key
          title
          songType
          single {
            title
            number
          }
          albums {
            title
            number
          }
          artwork {
            childImageSharp {
              fluid(maxWidth: 135) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        members {
          id
          field
          searchType
          name
          nameNotations {
            lastName
            lastNameEn
            lastNameFurigana
            firstName
            firstNameEn
            firstNameFurigana
          }
          join
          profileImage {
            childImageSharp {
              fluid(maxWidth: 135) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

type SearchPageDataNode = {
  albums: (Omit<SearchPageData['albums'][0], 'artwork'> & {
    artwork: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  })[];
  songs: (Omit<SearchPageData['songs'][0], 'artwork'> & {
    artwork: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  })[];
  members: (Omit<SearchPageData['members'][0], 'profileImage'> & {
    profileImage: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  })[];
};

type AlbumSearchDoc = Omit<SearchPageDataNode['albums'][0], 'artwork'> & {
  artworkFluid: FluidObject;
};
type SongSearchDoc = Omit<SearchPageDataNode['songs'][0], 'artwork'> & {
  artworkFluid: FluidObject;
};
type MemberSearchDoc = Omit<
  SearchPageDataNode['members'][0],
  'profileImage'
> & {
  profileImageFluid: FluidObject;
};

type SearchDoc = AlbumSearchDoc | SongSearchDoc | MemberSearchDoc;

export interface SearchPageProps {
  query: string;
  results: SearchDoc[];
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const SearchPageContainer: React.FC<{
  data: {
    allSearchJson: {
      nodes: SearchPageDataNode[];
    };
  };
}> = props => {
  const searchData = props.data.allSearchJson.nodes[0];

  const docs = React.useMemo<SearchDoc[]>(() => {
    const albums = searchData.albums.map(({ artwork, ...rest }) => ({
      ...rest,
      artworkFluid: artwork.childImageSharp.fluid,
    }));
    const songs = searchData.songs.map(({ artwork, ...rest }) => ({
      ...rest,
      artworkFluid: artwork.childImageSharp.fluid,
    }));
    const members = searchData.members.map(({ profileImage, ...rest }) => ({
      ...rest,
      profileImageFluid: profileImage.childImageSharp.fluid,
    }));
    return [...albums, ...songs, ...members];
  }, [searchData]);

  const index = useSearchIndex({
    docs,
    searchField: 'field',
    idField: 'id',
  });

  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<SearchDoc[]>([]);

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

  return <SearchPage query={query} results={results} onSearch={handleSearch} />;
};

export default SearchPageContainer;
