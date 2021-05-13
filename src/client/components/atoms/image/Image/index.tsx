import { PolyfilledLazyImage } from './PolyfilledLazyImage';
import { isServer } from 'utils/env';

const isImgLoadingSupported = (): boolean => {
  if (isServer()) {
    return true;
  }
  return 'loading' in HTMLImageElement.prototype;
};

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = props => {
  /* eslint-disable jsx-a11y/alt-text */
  return props.loading === 'lazy' && !isImgLoadingSupported() ? (
    <PolyfilledLazyImage {...props} />
  ) : (
    <img {...props} />
  );
};
