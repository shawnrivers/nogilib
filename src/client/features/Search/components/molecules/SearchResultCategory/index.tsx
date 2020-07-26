/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { SearchResultCard } from 'client/features/Search/components/molecules/SearchResultCard';
import { Message } from 'client/components/atoms/Message';
import { Typography } from 'client/components/atoms/Typography';
import { useAppTheme } from 'client/styles/tokens';

const DEFAULT_RESULT_COUNT = 4;

interface SearchResultCategoryProps {
  title: string;
  results: {
    to: string;
    imgSrc: string;
    heading: string;
    caption: string;
    secondCaption?: string;
  }[];
}

export const SearchResultCategory: React.FC<SearchResultCategoryProps> = props => {
  const { title, results, ...restProps } = props;
  const theme = useAppTheme();
  const [showMore, toggleShowMore] = React.useState(false);

  return results.length > 0 ? (
    <div {...restProps}>
      <div
        css={css`
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        `}
      >
        <Typography
          variant="h6"
          element="h3"
          css={css`
            text-transform: capitalize;
          `}
        >
          <Message text={title} />
        </Typography>
      </div>
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-template-rows: auto;
          grid-gap: ${theme.spacing.m};
          margin-top: 1rem;
        `}
      >
        {results.slice(0, DEFAULT_RESULT_COUNT).map(result => (
          <li key={result.heading}>
            <SearchResultCard
              to={result.to}
              imgSrc={result.imgSrc}
              title={result.heading}
              caption={result.caption}
              secondCaption={result.secondCaption}
            />
          </li>
        ))}
        {showMore
          ? results.slice(DEFAULT_RESULT_COUNT, results.length).map(result => (
              <li key={result.heading}>
                <SearchResultCard
                  to={result.to}
                  imgSrc={result.imgSrc}
                  title={result.heading}
                  caption={result.caption}
                  secondCaption={result.secondCaption}
                />
              </li>
            ))
          : null}
        {results.length > DEFAULT_RESULT_COUNT ? (
          <Typography
            variant="body2"
            element="button"
            textColor={{
              on: 'onBackground',
              variant: 'variant1',
            }}
            onClick={() =>
              showMore ? toggleShowMore(false) : toggleShowMore(true)
            }
            css={css`
              text-transform: uppercase;
              align-self: center;
              justify-self: start;

              &:hover {
                text-decoration: underline;
              }
            `}
          >
            <Message text={showMore ? 'show less' : 'show all'} />
          </Typography>
        ) : null}
      </ul>
    </div>
  ) : null;
};
