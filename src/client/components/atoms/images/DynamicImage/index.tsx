import Img from 'gatsby-image';
import React from 'react';
import { useAllImagesContext } from 'client/store/images/useAllImagesContext';

export type DynamicImageProps = {
  src: string;
} & Omit<React.ComponentProps<typeof Img>, 'fluid'>;

export const DynamicImage: React.FC<DynamicImageProps> = ({
  src,
  ...props
}) => {
  const { imgStyle, ...restProps } = props;
  const { allImages } = useAllImagesContext();

  const image = React.useMemo(
    () => allImages.find(({ relativePath }) => src === relativePath),
    [allImages, src]
  );

  return image?.childImageSharp.fluid ? (
    <Img
      fluid={image?.childImageSharp.fluid}
      imgStyle={{
        transition: 'none',
        ...imgStyle,
      }}
      {...restProps}
    />
  ) : null;
};
