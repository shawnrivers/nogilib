import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

export type StaticImageProps = GatsbyImageProps;

export const StaticImage: React.FC<StaticImageProps> = props => {
  const { imgStyle, ...restProps } = props;

  return (
    <Img
      imgStyle={{
        transition: 'none',
        ...imgStyle,
      }}
      {...restProps}
    />
  );
};
