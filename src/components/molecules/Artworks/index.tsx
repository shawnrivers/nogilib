import * as React from "react";
import styles from "./artworks.module.scss";
import { ArrowLeftIcon } from "components/atoms/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "components/atoms/icons/ArrowRightIcon";
import { motion } from "framer-motion";

interface ArtworksProps {
  artworks: {
    large: string;
    medium: string;
  }[];
  title: string;
  className?: string;
}

export const Artworks = ({ artworks, title, className }: ArtworksProps) => {
  const [artworkIndex, setArtworkIndex] = React.useState(0);

  const imageRef = React.useRef(null);

  const imageWidth = React.useMemo(() => {
    if (imageRef.current !== null) {
      // @ts-ignore
      return { width: imageRef.current.clientWidth, unit: "px" };
    }
    return { width: 50, unit: "vw" };
  }, [imageRef.current]);

  const handleClickNextArtwork = React.useCallback(() => {
    if (artworkIndex < artworks.length - 1) {
      setArtworkIndex(artworkIndex + 1);
    }
  }, [artworks, artworkIndex]);

  const handleClickPreviousArtwork = React.useCallback(() => {
    if (artworkIndex > 0) {
      setArtworkIndex(artworkIndex - 1);
    }
  }, [artworks, artworkIndex]);

  return (
    <div className={`${styles.container}${className ? " " + className : ""}`}>
      <div className={styles.artwork}>
        <button onClick={handleClickPreviousArtwork}>
          <ArrowLeftIcon className={styles.arrow} />
        </button>
        <div className={styles.images} ref={imageRef}>
          <motion.div
            animate={{
              transform: `translateX(${artworkIndex * -imageWidth.width}${
                imageWidth.unit
              })`,
            }}
            className={styles.images_container}
          >
            {artworks.map((artwork, index) => (
              <img
                key={index}
                src={artwork.medium}
                srcSet={`${artwork.large} 1.5x`}
                alt={title}
                className={styles.image}
              />
            ))}
          </motion.div>
        </div>
        <button onClick={handleClickNextArtwork}>
          <ArrowRightIcon className={styles.arrow} />
        </button>
      </div>
      <div className={styles.indicator}>
        {artworks.map((_, index) => (
          <button key={index} onClick={() => setArtworkIndex(index)}>
            <motion.div
              animate={{
                backgroundColor: index === artworkIndex ? "#757575" : "#ffffff",
              }}
              transition={{ duration: 0.2 }}
              className={styles.dot}
            ></motion.div>
          </button>
        ))}
      </div>
    </div>
  );
};
