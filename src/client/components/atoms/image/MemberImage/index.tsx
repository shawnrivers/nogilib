import * as React from 'react';
import {
  BaseImage,
  BaseImageProps,
} from 'client/components/atoms/image/BaseImage';

export const MemberImage: React.FC<BaseImageProps> = props => {
  return <BaseImage ratio={1.2} glow {...props} />;
};
