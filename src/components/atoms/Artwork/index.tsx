import * as React from "react";
import { animated, useSpring } from "react-spring";
import LazyLoad from "react-lazyload";
import styles from "./artwork.module.scss";

interface ArtworkProps {
  images: {
    large: string;
    medium: string;
    small: string;
  };
  title: string;
  className?: string;
}

export const Artwork = ({ images, title, className }: ArtworkProps) => {
  const [isMouseHovered, setMouseHover] = React.useState(false);

  const scale = useSpring({
    transform: `scale(${isMouseHovered ? 1.1 : 1})`,
  });

  const backgroundFade = useSpring({
    opacity: isMouseHovered ? 0.7 : 0,
  });

  const titleFade = useSpring({
    opacity: isMouseHovered ? 1 : 0,
  });

  return (
    <animated.div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      style={scale}
      className={styles.container + `${className ? " " + className : ""}`}
    >
      <LazyLoad offset={100}>
        <img
          src={images.small}
          srcSet={`${images.medium} 2x, ${images.large} 3x`}
          alt={title}
          className={styles.image}
        />
      </LazyLoad>
      <animated.div style={backgroundFade} className={styles.background} />
      <animated.div style={titleFade} className={styles.title}>
        <h3>{title}</h3>
      </animated.div>
    </animated.div>
  );
};
