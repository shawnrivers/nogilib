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
        <div className={styles.images}>
          {artworks.map((artwork, index) => (
            <motion.img
              animate={
                artworkIndex === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              key={index}
              src={artwork.medium}
              srcSet={`${artwork.large} 1.5x`}
              alt={title}
              className={styles.image}
            />
          ))}
        </div>
        <button onClick={handleClickNextArtwork}>
          <ArrowRightIcon className={styles.arrow} />
        </button>
      </div>
      <div className={styles.indicator}>
        {artworks.map((_, index) => (
          <button key={index} onClick={() => setArtworkIndex(index)}>
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
