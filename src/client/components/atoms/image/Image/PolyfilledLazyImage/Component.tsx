import { css } from '@emotion/react';
import LazyLoad from 'react-lazyload';
import { getColorVarName } from 'client/styles/tokens/colors';

type PolyfilledLazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const PolyfilledLazyImage: React.FC<PolyfilledLazyImageProps> = props => {
  const { alt, ...restProps } = props;
  return (
    <LazyLoad once offset={1400}>
      <img
        alt={alt}
        css={css`
          background-color: var(${getColorVarName('surface', 'variant0')});
        `}
        {...restProps}
      />
    </LazyLoad>
  );
};

export default PolyfilledLazyImage;
