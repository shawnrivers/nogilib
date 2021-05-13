/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import { PolyfilledLazyImage } from 'client/components/atoms/image/PolyfilledLazyImage';
import { isServer } from 'utils/env';

const isImgLoadingSupported = (): boolean => {
  if (isServer()) {
    return false;
  }
  return 'loading' in HTMLImageElement.prototype;
};

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspectRatio?: number;
};

export const Image: React.FC<ImageProps> = props => {
  const { aspectRatio = 1, className, loading, ...restImgProps } = props;

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        padding-top: ${aspectRatio * 100}%;
        overflow: hidden;
      `}
      className={className}
    >
      {/* eslint-disable jsx-a11y/alt-text */}
      {loading === 'lazy' && !isImgLoadingSupported() ? (
        <PolyfilledLazyImage
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          `}
          {...restImgProps}
        />
      ) : (
        <img
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          `}
          loading={loading}
          {...restImgProps}
        />
      )}
    </div>
  );
};
