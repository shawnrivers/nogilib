import * as React from "react";
import { injectIntl } from "react-intl";
import { Search, SearchResult } from "client/components/templates/Search";
import { useScrollRestoration } from "client/hooks/useScrollRestoration";
import "client/styles/app.scss";
import { SearchResultType } from "client/utils/constants";
import { SongType } from "server/constants/commons";
import { toCdNumber } from "utils/strings";

export type MemberDoc = {
  id: string;
  name: string;
  nameKey: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
    lastNameFurigana: string;
    firstNameFurigana: string;
  };
  profileImage: string;
  type: SearchResultType.Members;
};

export type SingleDoc = {
  id: string;
  name: string;
  title: string;
  number: string;
  artwork: string;
  type: SearchResultType.Singles;
};

export type AlbumDoc = {
  id: string;
  name: string;
  title: string;
  number: string;
  artwork: string;
  type: SearchResultType.Albums;
};

export type SongDoc = {
  id: string;
  name: string;
  title: string;
  key: string;
  artwork: string;
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

export const SearchContainer = injectIntl(({ intl }: { intl: any }) => {
  useScrollRestoration();

  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchDoc[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const lunr = React.useMemo(
    () => (typeof window !== "undefined" ? (window as any).__LUNR__.ja : null),
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
      }, 300);
    },
    [lunr]
  );

  const convertedResults = React.useMemo(() => {
    let members: SearchResult[] = [];
    let singles: SearchResult[] = [];
    let albums: SearchResult[] = [];
    let songs: SearchResult[] = [];

    for (const result of results) {
      switch (result.type) {
        case SearchResultType.Members:
          members.push({
            to: `/${result.type}/${result.nameKey}`,
            imgSrc: result.profileImage,
            heading: `${result.nameNotations.lastName} ${result.nameNotations.firstName}`,
            caption: `${result.nameNotations.lastNameEn} ${result.nameNotations.firstNameEn}`,
          });
          break;
        case SearchResultType.Singles:
          singles.push({
            to: `/${result.type}/${result.number}`,
            imgSrc: result.artwork,
            heading: result.title,
            caption: `${toCdNumber(result.number)} single`,
          });
          break;
        case SearchResultType.Albums:
          albums.push({
            to: `/${result.type}/${result.number}`,
            imgSrc: result.artwork,
            heading: result.title,
            caption: `${toCdNumber(result.number)} album`,
          });
          break;
        case SearchResultType.Songs:
          songs.push({
            to: `/${result.type}/${result.key}`,
            imgSrc: result.artwork,
            heading: result.title,
            caption: `#${intl.formatMessage({
              id: result.songType,
            })}`,
            secondCaption:
              result.single.number !== ""
                ? `#${toCdNumber(result.single.number)} single`
                : `#${toCdNumber(result.album.number)} album`,
          });
          break;
        default:
          break;
      }
    }

    return { members, singles, albums, songs };
  }, [results, intl]);

  return (
    <Search
      query={query}
      search={search}
      results={convertedResults}
      isSearching={isSearching}
    />
  );
});

export default () => <SearchContainer />;
