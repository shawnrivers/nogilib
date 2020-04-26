import * as React from "react";
import { injectIntl } from "react-intl";
import { motion } from "framer-motion";
import styles from "./search.module.scss";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import { SearchIcon } from "client/components/atoms/icons/SearchIcon";
import { Message } from "client/components/atoms/Message";
import { SearchResultCategory } from "client/components/molecules/SearchResultCategory";

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

    const [isInputFocused, setInputFocus] = React.useState(false);

    return (
      <PageContentLayout>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <motion.div
            animate={{
              borderBottomColor: isInputFocused ? "#595959" : "#d6d6d6",
            }}
            className={styles.inputContainer}
          >
            <input
              type="text"
              value={query}
              onChange={search}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              placeholder={intl.formatMessage({
                id: "Song title, member name, etc.",
              })}
              className={styles.input}
            />
          </motion.div>
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
      </PageContentLayout>
    );
  }
);
