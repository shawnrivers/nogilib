/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Card, CardProps } from 'client/components/atoms/Card';
import { Typography } from 'client/components/atoms/Typography';

type TextLinkProps = Omit<CardProps, 'children' | 'to'> & {
  text: string;
  to: string;
};

export const TextLink: React.FC<TextLinkProps> = props => {
  const { text, to, ...cardProps } = props;

  return (
    <Card
      to={to}
      padding="m"
      borderRadius="xxl"
      colorType="secondary"
      backgroundColor="variant0"
      {...cardProps}
    >
      <Typography
        variant="body1"
        textColor={{
          on: 'onSecondary',
          variant: 'standard',
        }}
        css={css`
          text-align: center;
        `}
      >
        {text}
      </Typography>
    </Card>
  );
};
