import * as React from 'react';
import {
  GridImage,
  BaseImageProps,
} from 'client/components/atoms/image/GirdImage';

export const GridArtworkImage: React.FC<BaseImageProps> = props => {
  return <GridImage ratio={1} glow {...props} />;
};
