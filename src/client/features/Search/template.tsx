/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import {
  SearchResultCategory,
  SearchResultCategoryProps,
} from 'client/features/Search/components/SearchResultCategory';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/hooks/useTranslations';
import { useAppContext } from 'client/hooks/useAppContext';

export type SearchProps = {
  query: string;
  search(event: React.FormEvent<HTMLInputElement>): void;
  results: {
    members: SearchResultCategoryProps['results'];
    cds: SearchResultCategoryProps['results'];
    songs: SearchResultCategoryProps['results'];
  };
  isSearching: boolean;
};

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
  const { language } = useAppContext();

  return (
    <PageContent title={{ text: getTranslation('search'), lang: language }}>
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
          <label htmlFor="search-box">
            <SearchIcon
              title={getTranslation('search')}
              css={css`
                fill: ${theme.colors.theme.onBackground.standard};
              `}
            />
          </label>
          <Typography
            variant="body1"
            element="div"
            css={css`
              width: 100%;
              margin-left: 0.5em;
            `}
          >
            <input
              id="search-box"
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
          titleElement="h2"
          results={results.members}
          css={css`
            margin-top: 2rem;
          `}
        />
        <SearchResultCategory
          title="cds"
          titleElement="h2"
          results={results.cds}
          css={css`
            margin-top: 2rem;
          `}
        />
        <SearchResultCategory
          title="songs"
          titleElement="h2"
          results={results.songs}
          css={css`
            margin-top: 2rem;
          `}
        />
      </div>
    </PageContent>
  );
};
