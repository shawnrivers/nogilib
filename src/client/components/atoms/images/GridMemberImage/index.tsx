import * as React from 'react';
import {
  GridImage,
  GridImageProps,
} from 'client/components/atoms/images/GirdImage';

export const GridMemberImage: React.FC<GridImageProps> = props => {
  return <GridImage ratio={1.2} {...props} />;
};
