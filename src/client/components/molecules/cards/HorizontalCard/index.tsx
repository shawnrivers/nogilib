/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Card, CardProps } from 'client/components/atoms/Card';
import { commonStyles } from 'client/styles/tokens';
import { GridImage } from 'client/components/atoms/images/GirdImage';
import { Hashtag } from 'client/components/atoms/Hashtag';
import { Typography } from 'client/components/atoms/Typography';

type HorizontalCardProps = CardProps & {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  tags: string[];
};

export const HorizontalCard: React.FC<HorizontalCardProps> = props => {
  return (
    <Card borderRadius="s" padding="xxs" to={props.to}>
      <div
        css={css`
          display: grid;
          grid-template-columns: 90px auto;
          grid-template-rows: auto;
          grid-gap: ${commonStyles.spacing.m};
          padding: ${commonStyles.spacing.xs};
          overflow: hidden;
        `}
      >
        <GridImage src={props.image.src} alt={props.image.alt} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            overflow: hidden;
          `}
        >
          <Typography variant="h7" element="p" bold ellipsis>
            {props.title}
          </Typography>
          {props.tags.length > 0 && (
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
              {props.tags.map(tag => (
                <Hashtag
                  key={tag}
                  textColor={{
                    on: 'onSurface',
                    variant: 'variant0',
                  }}
                  css={css`
                    margin-right: 0.3em;
                  `}
                >
                  {tag}
                </Hashtag>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
