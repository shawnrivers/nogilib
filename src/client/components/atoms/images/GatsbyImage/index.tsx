import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

export const GatsbyImage: React.FC<GatsbyImageProps> = props => {
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
