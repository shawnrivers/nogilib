import Img from 'gatsby-image';
import React from 'react';
import { useAllImagesContext } from 'client/store/images/useAllImagesContext';

export type GatsbyImageProps = {
  src: string;
} & Omit<React.ComponentProps<typeof Img>, 'fluid'>;

export const GatsbyImage: React.FC<GatsbyImageProps> = ({ src, ...props }) => {
  const { allImages } = useAllImagesContext();

  const image = React.useMemo(
    () => allImages.find(({ relativePath }) => src === relativePath),
    [allImages, src]
  );

  return image?.childImageSharp.fluid ? (
    <Img fluid={image?.childImageSharp.fluid} {...props} />
  ) : null;
};
