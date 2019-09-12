import * as React from "react";
import { forceCheck } from "react-lazyload";
import {
  Search,
  MemberResult,
  SingleResult,
  AlbumResult,
  SongResult,
} from "components/templates/Search";
import { SearchResultType } from "utils/constants";
import { SongType } from "types/responseTypes";

export type MemberDoc = {
  id: string;
  name: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
    lastNameFurigana: string;
    firstNameFurigana: string;
  };
  profileImage: {
    large: string;
    small: string;
  };
  type: SearchResultType.Members;
};

export type SingleDoc = {
  id: string;
  name: string;
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: SearchResultType.Singles;
};

export type AlbumDoc = {
  id: string;
  name: string;
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: SearchResultType.Albums;
};

export type SongDoc = {
  id: string;
  name: string;
  title: string;
  key: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  songType: SongType;
  single: {
    number: string;
    title: string;
  };
  album: {
    number: string;
    title: string;
  };
  type: SearchResultType.Songs;
};

export type SearchDoc = AlbumDoc | SingleDoc | SongDoc | MemberDoc;

let timeout: NodeJS.Timeout;

export const SearchContainer = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchDoc[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const lunr = React.useMemo(
    () => (window as typeof window & { __LUNR__: any }).__LUNR__.ja,
    []
  );

  const search = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const inputQuery = event.currentTarget.value;
      setQuery(inputQuery);

      setIsSearching(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const searchResult =
          inputQuery !== ""
            ? lunr.index
                .search(`name:*${inputQuery}*`, { extend: true })
                .map(({ ref }: any) => lunr.store[ref])
            : [];

        setResults(searchResult);

        setIsSearching(false);
      }, 1000);
    },
    [lunr]
  );

  const convertedResults = React.useMemo(() => {
    let members: MemberResult[] = [];
    let singles: SingleResult[] = [];
    let albums: AlbumResult[] = [];
    let songs: SongResult[] = [];

    for (const result of results) {
      switch (result.type) {
        case SearchResultType.Members:
          members.push({
            name: result.name,
            nameNotations: result.nameNotations,
            profileImage: result.profileImage,
          });
          break;
        case SearchResultType.Singles:
          singles.push({
            title: result.title,
            number: result.number,
            artwork: result.artwork,
          });
          break;
        case SearchResultType.Albums:
          albums.push({
            title: result.title,
            number: result.number,
            artwork: result.artwork,
          });
          break;
        case SearchResultType.Songs:
          songs.push({
            title: result.title,
            key: result.key,
            artwork: result.artwork,
            songType: result.songType,
            single: result.single,
            album: result.album,
          });
          break;
        default:
          break;
      }
    }

    return { members, singles, albums, songs };
  }, [results]);

  console.log({ query, results });

  React.useEffect(() => {
    forceCheck();
  }, [results]);

  return (
    <Search
      query={query}
      search={search}
      results={convertedResults}
      isSearching={isSearching}
    />
  );
};

export default () => <SearchContainer />;
