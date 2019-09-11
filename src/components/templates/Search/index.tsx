import * as React from "react";
import { Layout } from "components/atoms/Layout";

type AlbumDoc = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: "albums";
};

type SingleDoc = {
  title: string;
  number: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: "singles";
};

type SongDoc = {
  title: string;
  key: string;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  type: "songs";
};

type MemberDoc = {
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
  type: "members";
};

type SearchDoc = {
  id: string;
  name: string;
} & (AlbumDoc | SingleDoc | SongDoc | MemberDoc);

export const Search = () => {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState<SearchDoc[]>([]);

  const lunr = React.useMemo(
    () => (window as typeof window & { __LUNR__: any }).__LUNR__.ja,
    []
  );

  const search = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const inputQuery = event.currentTarget.value;
      setQuery(inputQuery);

      const searchResult =
        inputQuery !== ""
          ? lunr.index
              .search(`*${inputQuery}*`, { extend: true })
              .map(({ ref }: any) => lunr.store[ref])
          : [];

      setResult(searchResult);
    },
    [lunr]
  );

  return (
    <Layout>
      <h1>Search</h1>
      <input type="text" value={query} onChange={search} />
      {result ? (
        <ul>
          {result.map(page => (
            <li key={page.name}>{page.name}</li>
          ))}
        </ul>
      ) : null}
    </Layout>
  );
};
