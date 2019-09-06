import * as React from "react";
import styles from "./artworks.module.scss";
import { ArrowLeftIcon } from "components/atoms/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "components/atoms/icons/ArrowRightIcon";
import { motion } from "framer-motion";
import { classNames } from "utils/strings";

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

  const handleClickNextArtwork = React.useCallback(() => {
    if (artworkIndex < artworks.length - 1) {
      setArtworkIndex(artworkIndex + 1);
    }
  }, [artworks, artworkIndex]);

  const handleClickPreviousArtwork = React.useCallback(() => {
    if (artworkIndex > 0) {
      setArtworkIndex(artworkIndex - 1);
    }
  }, [artworkIndex]);

  const handleClickImage = React.useCallback(() => {
    if (artworkIndex < artworks.length - 1) {
      setArtworkIndex(artworkIndex + 1);
    } else {
      setArtworkIndex(0);
    }
  }, [artworks, artworkIndex]);

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.artwork}>
        <motion.button
          whileHover={{ scale: 2, x: -8 }}
          onClick={handleClickPreviousArtwork}
          aria-label="Previous Artwork"
        >
          <ArrowLeftIcon className={styles.arrow} />
        </motion.button>
        <motion.div whileHover={{ scale: 1.07 }} className={styles.images}>
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              animate={
                artworkIndex === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              onClick={handleClickImage}
            >
              <img
                src={artwork.medium}
                srcSet={`${artwork.large} 1.5x`}
                alt={title}
                className={styles.image}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          whileHover={{ scale: 2, x: 8 }}
          onClick={handleClickNextArtwork}
          aria-label="Next Artwork"
        >
          <ArrowRightIcon className={styles.arrow} />
        </motion.button>
      </div>
      <div className={styles.indicator}>
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setArtworkIndex(index)}
            aria-label="Next Artwork"
          >
            <div
              style={{
                backgroundColor: index === artworkIndex ? "#757575" : "#ffffff",
              }}
              className={styles.dot}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
