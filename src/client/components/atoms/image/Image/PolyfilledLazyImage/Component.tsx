import LazyLoad from 'react-lazyload';

type PolyfilledLazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const PolyfilledLazyImage: React.FC<PolyfilledLazyImageProps> = props => {
  const { alt, ...restProps } = props;
  return (
    <LazyLoad once offset={1400}>
      <img alt={alt} {...restProps} />
    </LazyLoad>
  );
};

export default PolyfilledLazyImage;
