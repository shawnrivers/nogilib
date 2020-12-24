import * as React from 'react';
import {
  GridImage,
  GridImageProps,
} from 'client/components/atoms/images/GirdImage';

export type GridArtworkImageProps = GridImageProps;

export const GridArtworkImage: React.FC<GridArtworkImageProps> = props => {
  return <GridImage ratio={1} {...props} />;
};
