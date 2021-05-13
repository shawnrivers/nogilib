import LazyLoad from 'react-lazyload';
type PolyfilledLazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const PolyfilledLazyImage: React.FC<PolyfilledLazyImageProps> = props => {
  return (
    <LazyLoad once offset={1400}>
      {/* eslint-disable jsx-a11y/alt-text */}
      <img {...props} />
    </LazyLoad>
  );
};

export default PolyfilledLazyImage;
