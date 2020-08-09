/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import { SearchResultCategory } from 'client/features/Search/components/SearchResultCategory';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/hooks/useTranslations';

export type SearchResult = {
  to: string;
  imgSrc: string;
  heading: string;
  captions: string[];
};

interface SearchProps {
  query: string;
  search(event: React.FormEvent<HTMLInputElement>): void;
  results: {
    members: SearchResult[];
    cds: SearchResult[];
    songs: SearchResult[];
  };
  isSearching: boolean;
}

export const Search: React.FC<SearchProps> = props => {
  const { query, search, results, isSearching } = props;

  const hasNoResult = React.useMemo(
    () =>
      results.members.length + results.cds.length + results.songs.length ===
        0 &&
      query !== '' &&
      !isSearching,
    [results, query, isSearching]
  );

  const theme = useAppTheme();
  const { Translation, getTranslation } = useTranslations();

  return (
    <PageContent title="search">
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
          <SearchIcon
            css={css`
              fill: ${theme.colors.theme.onBackground.standard};
            `}
          />
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
              onChange={search}
              placeholder={getTranslation('Song title, member name, etc.')}
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

                &:focus {
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
          results={results.members}
          css={css`
            margin-top: 2rem;
          `}
        />
        <SearchResultCategory
          title="cds"
          results={results.cds}
          css={css`
            margin-top: 2rem;
          `}
        />
        <SearchResultCategory
          title="songs"
          results={results.songs}
          css={css`
            margin-top: 2rem;
          `}
        />
      </div>
    </PageContent>
  );
};
