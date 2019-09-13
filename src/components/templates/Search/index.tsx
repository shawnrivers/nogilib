import * as React from "react";
import { injectIntl } from "react-intl";
import styles from "./search.module.scss";
import { Layout } from "components/atoms/Layout";
import { SearchIcon } from "components/atoms/icons/SearchIcon";
import { Message } from "components/atoms/Message";
import { SearchResultCategory } from "components/molecules/SearchResultCategory";

export type SearchResult = {
  to: string;
  imgSrc: string;
  imgSrcSet: string;
  heading: string;
  caption: string;
  secondCaption?: string;
};

interface SearchProps {
  query: string;
  search(event: React.FormEvent<HTMLInputElement>): void;
  results: {
    members: SearchResult[];
    singles: SearchResult[];
    albums: SearchResult[];
    songs: SearchResult[];
  };
  isSearching: boolean;
  intl: any;
}

export const Search = injectIntl(
  ({ query, search, results, isSearching, intl }: SearchProps) => {
    const hasNoResult = React.useMemo(
      () =>
        results.members.length +
          results.singles.length +
          results.albums.length +
          results.songs.length ===
          0 &&
        query !== "" &&
        !isSearching,
      [results, query, isSearching]
    );

    return (
      <Layout>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={query}
              onChange={search}
              placeholder={intl.formatMessage({
                id: "Song title, member name, etc.",
              })}
              className={styles.input}
            />
          </div>
        </div>
        {hasNoResult ? (
          <p className={styles.noResult}>
            <Message text="no result" />
          </p>
        ) : null}
        <SearchResultCategory
          title="members"
          results={results.members}
          className={styles.category}
        />
        <SearchResultCategory
          title="singles"
          results={results.singles}
          className={styles.category}
        />
        <SearchResultCategory
          title="albums"
          results={results.albums}
          className={styles.category}
        />
        <SearchResultCategory title="songs" results={results.songs} />
      </Layout>
    );
  }
);
