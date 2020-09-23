/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { useAppTheme } from 'client/styles/tokens';
import { useTranslations } from 'client/hooks/useTranslations';
import {
  HorizontalCard,
  HorizontalCardProps,
} from 'client/components/molecules/cards/HorizontalCard';

const DEFAULT_RESULT_COUNT = 4;

export type SearchResultCategoryProps = {
  title: 'members' | 'cds' | 'songs';
  titleElement?: TypographyProps['element'];
  results: {
    to: string;
    imgSrc: string;
    heading: HorizontalCardProps['title'];
    captions: HorizontalCardProps['tags'];
  }[];
};

export const SearchResultCategory: React.FC<SearchResultCategoryProps> = props => {
  const { title, results, titleElement = 'h3', ...restProps } = props;
  const theme = useAppTheme();
  const { Translation } = useTranslations();
  const [showMore, toggleShowMore] = React.useState(false);

  return results.length > 0 ? (
    <section {...restProps}>
      <Typography
        variant="h6"
        element={titleElement}
        css={css`
          text-transform: capitalize;
        `}
      >
        <Translation text={title} />
      </Typography>
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
          <li key={result.heading.text}>
            <HorizontalCard
              to={result.to}
              image={{ src: result.imgSrc, alt: result.heading.text }}
              title={result.heading}
              titleElement="h3"
              tags={result.captions}
              capitalizeTitle={title === 'members'}
            />
          </li>
        ))}
        {showMore
          ? results.slice(DEFAULT_RESULT_COUNT, results.length).map(result => (
              <li key={result.heading.text}>
                <HorizontalCard
                  to={result.to}
                  image={{ src: result.imgSrc, alt: result.heading.text }}
                  title={result.heading}
                  titleElement="h3"
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
    </section>
  ) : null;
};
