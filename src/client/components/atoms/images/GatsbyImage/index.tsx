import {
  GatsbyImage as GatsbyImageComponent,
  GatsbyImageProps,
} from 'gatsby-plugin-image';
import React from 'react';

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
