import * as React from "react";
import { Layout } from "components/atoms/Layout";
import { SearchResultCard } from "components/atoms/SearchResultCard";
import { toCdNumber } from "utils/strings";

export type MemberResult = {
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
};

export type SingleResult = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
};

export type AlbumResult = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
};

export type SongResult = {
  title: string;
  key: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
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
}

export const Search = ({ query, search, results }: SearchProps) => {
  return (
    <Layout>
      <h1>Search</h1>
      <input type="text" value={query} onChange={search} />
      {results.members.length > 0 ? (
        <div>
          <h2>members</h2>
          <ul>
            {results.members.map(result => (
              <li key={result.name}>
                <SearchResultCard
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
        <div>
          <h2>Singles</h2>
          <ul>
            {results.singles.map(result => (
              <li key={result.title}>
                <SearchResultCard
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
        <div>
          <h2>Albums</h2>
          <ul>
            {results.albums.map(result => (
              <li key={result.title}>
                <SearchResultCard
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
        <div>
          <h2>Songs</h2>
          <ul>
            {results.songs.map(result => (
              <li key={result.title}>
                <SearchResultCard
                  imgSrc={result.artwork.small}
                  imgSrcSet={`${result.artwork.medium} 2x, ${result.artwork.large} 3x`}
                  title={result.title}
                  caption={result.key}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Layout>
  );
};
