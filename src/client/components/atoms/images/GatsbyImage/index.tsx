/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  GatsbyImage as GatsbyImageComponent,
  GatsbyImageProps as GatsbyImageComponentProps,
} from 'gatsby-plugin-image';
import React from 'react';
import { commonStyles } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/tokens/borderRadius';

export type GatsbyImageProps = GatsbyImageComponentProps & {
  borderRadius?: BorderRadiusKey;
};

export const GatsbyImage: React.FC<GatsbyImageProps> = props => {
  const { imgStyle, borderRadius: borderRadiusKey = 'm', ...restProps } = props;

  const borderRadius = commonStyles.borderRadius[borderRadiusKey];

  return (
    <GatsbyImageComponent
      imgStyle={{
        transition: 'none',
        borderRadius,
        ...imgStyle,
      }}
      css={css`
        border-radius: ${borderRadius};
      `}
      {...restProps}
    />
  );
};
