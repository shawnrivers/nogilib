/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/hooks/useTranslations';
import { HorizontalCard } from 'client/components/molecules/cards/HorizontalCard';

const DEFAULT_RESULT_COUNT = 4;

interface SearchResultCategoryProps {
  title: 'members' | 'cds' | 'songs';
  results: {
    to: string;
    imgSrc: string;
    heading: string;
    captions: string[];
  }[];
}

export const SearchResultCategory: React.FC<SearchResultCategoryProps> = props => {
  const { title, results, ...restProps } = props;
  const theme = useAppTheme();
  const { Translation } = useTranslations();
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
          <Translation text={title} />
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
            <HorizontalCard
              to={result.to}
              image={{ src: result.imgSrc, alt: result.heading }}
              title={result.heading}
              tags={result.captions}
              capitalizeTitle={title === 'members'}
            />
          </li>
        ))}
        {showMore
          ? results.slice(DEFAULT_RESULT_COUNT, results.length).map(result => (
              <li key={result.heading}>
                <HorizontalCard
                  to={result.to}
                  image={{ src: result.imgSrc, alt: result.heading }}
                  title={result.heading}
                  tags={result.captions}
                  capitalizeTitle={title === 'members'}
                />
              </li>
            ))
          : null}
        {results.length > DEFAULT_RESULT_COUNT && !showMore ? (
          <Typography
            variant="body2"
            element="button"
            textColor={{
              on: 'onBackground',
              variant: 'variant1',
            }}
            onClick={() => toggleShowMore(true)}
            css={css`
              text-transform: uppercase;
              align-self: center;
              justify-self: start;

              @media (hover: hover) and (pointer: fine) {
                &:hover {
                  text-decoration: underline;
                }
              }
            `}
          >
            <Translation text={'show all'} />
          </Typography>
        ) : null}
      </ul>
    </div>
  ) : null;
};
