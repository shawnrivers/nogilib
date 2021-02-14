/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import Image from 'next/image';
import { Card, CardProps } from 'client/components/atoms/Card';
import { commonStyles } from 'client/styles/tokens';
import { Hashtag } from 'client/components/atoms/Hashtag';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';

export type HorizontalCardProps = Omit<CardProps, 'children' | 'title'> & {
  image: string;
  title: {
    text: string;
    lang: string;
  };
  titleElement?: TypographyProps['element'];
  tags: {
    text: string;
    lang: string;
  }[];
  capitalizeTitle?: boolean;
};

export const HorizontalCard: React.FC<HorizontalCardProps> = props => {
  const {
    image,
    title,
    titleElement = 'p',
    tags,
    capitalizeTitle = false,
    ...cardProps
  } = props;

  return (
    <Card borderRadius="s" padding="xxs" aria-label={title.text} {...cardProps}>
      <article
        css={css`
          display: grid;
          grid-template-columns: 90px auto;
          grid-template-rows: auto;
          grid-gap: ${commonStyles.spacing.m};
          padding: ${commonStyles.spacing.xs};
          overflow: hidden;
        `}
      >
        <Image
          src={image}
          width={90}
          height={90}
          alt=""
          role="presentation"
          objectFit="cover"
          objectPosition="top"
          css={css`
            border-radius: ${commonStyles.borderRadius.s};
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            overflow: hidden;
          `}
        >
          <Typography
            variant="body2"
            element={titleElement}
            bold
            ellipsis
            css={css`
              text-transform: ${capitalizeTitle ? 'capitalize' : 'initial'};
            `}
            lang={title.lang}
          >
            {title.text}
          </Typography>
          {tags.length > 0 && (
            <div
              css={css`
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;

                &::-webkit-scrollbar {
                  display: none;
                }
              `}
            >
              {tags.map(tag => (
                <Hashtag
                  key={tag.text}
                  textColor={{
                    on: 'onSurface',
                    variant: 'variant0',
                  }}
                  css={css`
                    margin-right: 0.3em;
                  `}
                  lang={tag.lang}
                >
                  {tag.text}
                </Hashtag>
              ))}
            </div>
          )}
        </div>
      </article>
    </Card>
  );
};
