import * as React from 'react';
import {
  GridImage,
  GridImageProps,
} from 'client/components/atoms/images/GirdImage';

export type GridMemberImageProps = GridImageProps;

export const GridMemberImage: React.FC<GridMemberImageProps> = props => {
  return <GridImage ratio={1.2} {...props} />;
};
