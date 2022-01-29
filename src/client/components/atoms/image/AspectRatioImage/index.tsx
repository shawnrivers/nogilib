import { css } from '@emotion/react';
import { Image, ImageProps } from '../Image';

type AspectRatioImageProps = ImageProps & {
  aspectRatio?: number;
};

export const AspectRatioImage: React.FC<AspectRatioImageProps> = props => {
  const { aspectRatio = 1, className, alt, ...restImgProps } = props;

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        padding-top: ${(1 / aspectRatio) * 100}%;
        overflow: hidden;
      `}
      className={className}
    >
      <Image
        alt={alt}
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
    </div>
  );
};
