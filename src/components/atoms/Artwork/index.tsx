import * as React from "react";
import { animated, useSpring } from "react-spring";
import styles from "./artwork.module.scss";

interface ArtworkProps {
  src: string;
  title: string;
  className?: string;
}

export const Artwork = (props: ArtworkProps) => {
  const [containerAnimationProps, setContainerAnimationProps] = useSpring(
    () => ({
      transform: `scale(1)`,
    })
  );

  const [
    titleBackgroundAnimationProps,
    setTitleBackgroundAnimationProps,
  ] = useSpring(() => ({
    opacity: 0,
  }));

  const [titleAnimationProps, setTitleAnimationProps] = useSpring(() => ({
    opacity: 0,
  }));

  const handleMouseEnter = React.useCallback(() => {
    setContainerAnimationProps({ transform: `scale(1.1)` });
    setTitleBackgroundAnimationProps({ opacity: 0.7 });
    setTitleAnimationProps({ opacity: 1 });
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setContainerAnimationProps({ transform: `scale(1)` });
    setTitleBackgroundAnimationProps({ opacity: 0 });
    setTitleAnimationProps({ opacity: 0 });
  }, []);

  return (
    <animated.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: containerAnimationProps.transform }}
      className={
        styles.container + `${props.className ? " " + props.className : ""}`
      }
    >
      <img src={props.src} alt={props.title} className={styles.image} />
      <animated.div
        style={{
          opacity: titleBackgroundAnimationProps.opacity,
        }}
        className={styles.background}
      />
      <animated.div
        style={{
          opacity: titleAnimationProps.opacity,
        }}
        className={styles.title}
      >
        <h3>{props.title}</h3>
      </animated.div>
    </animated.div>
  );
};
