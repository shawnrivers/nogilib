import { css } from '@emotion/core';
import * as React from 'react';
import { TypographyProps } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { HorizontalCardProps } from 'client/components/molecules/cards/HorizontalCard';
import { MemberCell } from 'client/components/v6/shared/cells/MemberCell';
import { AlbumCell } from 'client/components/v6/shared/cells/AlbumCell';
import { SongCell } from 'client/components/v6/shared/cells/SongCell';
import { capitalizeText } from 'utils/string';
import { TextDivider } from 'client/components/molecules/TextDivider';

type SearchResult = {
  href: string;
  image: HorizontalCardProps['image'];
  heading: HorizontalCardProps['title'];
  captions: HorizontalCardProps['tags'];
};

type ResultType = 'members' | 'cds' | 'songs';

const SearchResultCell: React.FC<
  SearchResult & {
    type: ResultType;
  }
> = props => {
  if (props.type === 'members') {
    return (
      <div
        css={css`
          width: 120px;
          height: 170px;
        `}
      >
        <MemberCell
          href={props.href}
          name={capitalizeText(props.heading.text)}
          nameLang={props.heading.lang ?? 'ja'}
          caption={props.captions[0].text}
          image={props.image}
        />
      </div>
    );
  }
  if (props.type === 'cds') {
    return (
      <div
        css={css`
          width: 195px;
          height: 160px;
        `}
      >
        <AlbumCell
          href={props.href}
          title={props.heading.text}
          caption={props.captions[0].text}
          image={props.image}
        />
      </div>
    );
  }
  return (
    <div
      css={css`
        width: 180px;
        height: 190px;
      `}
    >
      <SongCell
        href={props.href}
        title={props.heading.text}
        titleLang={props.heading.lang ?? 'ja'}
        caption={props.captions[0].text}
        image={props.image}
      />
    </div>
  );
};

export type SearchResultCategoryProps = {
  title: ResultType;
  titleElement?: TypographyProps['element'];
  results: SearchResult[];
};

export const SearchResultCategory: React.FC<SearchResultCategoryProps> =
  props => {
    const { title, results, titleElement = 'h3', ...restProps } = props;
    const { getTranslation } = useTranslations();

    return results.length > 0 ? (
      <section {...restProps}>
        <TextDivider text={getTranslation(title)} element={titleElement} />
        <ul
          css={css`
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1rem;

            & > li {
              margin: ${commonStyles.spacing.xs};
            }
          `}
        >
          {results.map(result => (
            <li key={result.heading.text}>
              <SearchResultCell type={title} {...result} />
            </li>
          ))}
        </ul>
      </section>
    ) : null;
  };
