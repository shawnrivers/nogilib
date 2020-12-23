import Img from 'gatsby-image';
import React from 'react';

export const StaticImage: React.FC<
  React.ComponentProps<typeof Img>
> = props => {
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
