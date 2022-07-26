import { css } from '@emotion/react';
import { getColorVarName } from 'client/styles/tokens/colors';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<ImageProps> = props => {
  const { loading, alt, ...imgProps } = props;

  return (
    <img
      loading={loading}
      alt={alt}
      css={css`
        background-color: var(${getColorVarName('surface', 'variant0')});
      `}
      {...imgProps}
    />
  );
};
