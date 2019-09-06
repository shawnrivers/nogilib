import * as React from "react";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const ImageFade = {
  loading: { opacity: 0 },
  loaded: { opacity: 1 },
};

interface LazyImageProps {
  src: string;
  alt: string;
  srcSet?: string;
  notLazy?: boolean;
  className?: string;
}

export const LazyImage = ({
  src,
  alt,
  srcSet,
  notLazy,
  className,
}: LazyImageProps) => {
  const [isImageLoaded, setImageLoad] = React.useState(false);

  return notLazy ? (
    <motion.img
      src={src}
      srcSet={srcSet}
      alt={alt}
      onLoad={() => setImageLoad(true)}
      animate={isImageLoaded ? "loaded" : "loading"}
      variants={ImageFade}
      className={className}
    />
  ) : (
    <LazyLoad offset={100}>
      <motion.img
        src={src}
        srcSet={srcSet}
        alt={alt}
        onLoad={() => setImageLoad(true)}
        animate={isImageLoaded ? "loaded" : "loading"}
        variants={ImageFade}
        className={className}
      />
    </LazyLoad>
  );
};
