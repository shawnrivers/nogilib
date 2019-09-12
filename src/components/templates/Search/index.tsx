import * as React from "react";
import { injectIntl } from "react-intl";
import styles from "./search.module.scss";
import { Layout } from "components/atoms/Layout";
import { SearchResultCard } from "components/atoms/SearchResultCard";
import { toCdNumber } from "utils/strings";
import { SearchIcon } from "components/atoms/icons/SearchIcon";
import { SongType } from "types/responseTypes";
import { Message } from "components/atoms/Message";
import { SearchResultType } from "utils/constants";

export type MemberResult = {
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
  profileImage: {
    large: string;
    small: string;
  };
  type: SearchResultType.Members;
};

export type SingleResult = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: SearchResultType.Singles;
};

export type AlbumResult = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: SearchResultType.Albums;
};

export type SongResult = {
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

interface SearchProps {
  query: string;
  search(event: React.FormEvent<HTMLInputElement>): void;
  results: {
    members: MemberResult[];
    singles: SingleResult[];
    albums: AlbumResult[];
    songs: SongResult[];
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
        {hasNoResult ? (
          <p className={styles.noResult}>
            <Message text="no result" />
          </p>
        ) : null}
        {results.members.length > 0 ? (
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>members</h2>
            <ul className={styles.resultCardList}>
              {results.members.map(result => (
                <li key={result.name} className={styles.resultCard}>
                  <SearchResultCard
                    to={`/${result.type}/${result.nameKey}`}
                    imgSrc={result.profileImage.small}
                    imgSrcSet={`${result.profileImage.large} 2x`}
                    title={
                      result.nameNotations.lastName +
                      " " +
                      result.nameNotations.firstName
                    }
                    caption={
                      result.nameNotations.lastNameEn +
                      " " +
                      result.nameNotations.firstNameEn
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {results.singles.length > 0 ? (
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Singles</h2>
            <ul className={styles.resultCardList}>
              {results.singles.map(result => (
                <li key={result.title} className={styles.resultCard}>
                  <SearchResultCard
                    to={`/${result.type}/${result.number}`}
                    imgSrc={result.artwork.small}
                    imgSrcSet={`${result.artwork.medium} 2x, ${result.artwork.large} 3x`}
                    title={result.title}
                    caption={toCdNumber(result.number) + " single"}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {results.albums.length > 0 ? (
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Albums</h2>
            <ul className={styles.resultCardList}>
              {results.albums.map(result => (
                <li key={result.title} className={styles.resultCard}>
                  <SearchResultCard
                    to={`/${result.type}/${result.number}`}
                    imgSrc={result.artwork.small}
                    imgSrcSet={`${result.artwork.medium} 2x, ${result.artwork.large} 3x`}
                    title={result.title}
                    caption={toCdNumber(result.number) + " album"}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {results.songs.length > 0 ? (
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Songs</h2>
            <ul className={styles.resultCardList}>
              {results.songs.map(result => (
                <li key={result.title} className={styles.resultCard}>
                  <SearchResultCard
                    to={`/${result.type}/${result.key}`}
                    imgSrc={result.artwork.small}
                    imgSrcSet={`${result.artwork.medium} 2x, ${result.artwork.large} 3x`}
                    title={result.title}
                    caption={`#${intl.formatMessage({
                      id: result.songType,
                    })}`}
                    secondCaption={
                      result.single.number !== ""
                        ? `#${toCdNumber(result.single.number)} single`
                        : `#${toCdNumber(result.album.number)} album`
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Layout>
    );
  }
);
