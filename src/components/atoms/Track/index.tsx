import * as React from "react";
import styles from "./track.module.scss";

interface TrackProps {
  number: number;
  title: string;
  type: string;
  focusPerformers: {
    name: string[];
    type: string;
  };
  className?: string;
}

export const Track = (props: TrackProps) => (
  <div
    className={`${styles.container} + ${
      props.className ? " " + props.className : ""
    }`}
  >
    <span className={styles.number}>{props.number}.</span>
    <div className={styles.content}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.description}>
        <span>#{props.type}</span>
        <span></span>
      </div>
    </div>
  </div>
);
