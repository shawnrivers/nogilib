import * as React from "react";
import { toCdNumber } from "utils/strings";
import styles from "./cd.module.scss";
import { Track } from "components/atoms/Track";

interface CdProps {
  type: "single" | "album";
  title: string;
  number: string;
  artworks: {
    large: string;
    medium: string;
  }[];
  songs: {
    key: string;
    title: string;
    type: string;
    focusPerformers: {
      name: string[];
      type: string;
    };
  }[];
  release: string;
}

export const Cd = ({
  type,
  title,
  number,
  artworks,
  songs,
  release,
}: CdProps) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h4 className={styles.number}>
        {toCdNumber(number)} {type}
      </h4>
      <h1 className={styles.title}>{title}</h1>
    </div>
    <div className={styles.flexbox}>
      <div className={styles.artworks}>
        <img
          src={artworks[0].medium}
          srcSet={`${artworks[0].large} 1.5x`}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Track</h2>
          <div className={styles.tracklist}>
            {songs.map((song, index) => (
              <Track
                number={index + 1}
                key={song.key}
                title={song.title}
                type={song.type}
                focusPerformers={song.focusPerformers}
                className={styles.track}
              />
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Release</h2>
          <p className={styles.body}>{release}</p>
        </section>
      </div>
    </div>
  </div>
);
