import {
  GatsbyImage as GatsbyImageComponent,
  GatsbyImageProps as GatsbyImageComponentProps,
} from 'gatsby-plugin-image';
import React from 'react';

export type GatsbyImageProps = GatsbyImageComponentProps;

export const GatsbyImage: React.FC<GatsbyImageProps> = props => {
  const { imgStyle, ...restProps } = props;

  return (
    <GatsbyImageComponent
      imgStyle={{
        transition: 'none',
        ...imgStyle,
      }}
      {...restProps}
    />
  );
};
