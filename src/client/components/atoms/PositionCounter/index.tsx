import * as React from "react";
import styles from "./positioncounter.module.scss";

interface PositionCounterProps {
  center: number;
  fukujin: number;
  selected: number;
  under: number;
}

export const PositionCounter = (props: PositionCounterProps) => (
  <div className={styles.container}>
    {props.selected !== 0 ? (
      <div
        className={styles.selectedContainer}
        style={{
          width: `${(props.selected / (props.under + props.selected)) * 100}%`,
        }}
      >
        {props.center !== 0 ? (
          <div
            className={styles.center}
            style={{ width: `${(props.center / props.selected) * 100}%` }}
          >
            {props.center}
          </div>
        ) : null}
        {props.fukujin - props.center !== 0 ? (
          <div
            className={styles.fukujin}
            style={{
              width: `${
                ((props.fukujin - props.center) / props.selected) * 100
              }%`,
            }}
          >
            {props.fukujin - props.center}
          </div>
        ) : null}
        {props.selected - props.fukujin !== 0 ? (
          <div
            className={styles.selected}
            style={{
              width: `${
                ((props.selected - props.fukujin) / props.selected) * 100
              }%`,
            }}
          >
            {props.selected - props.fukujin}
          </div>
        ) : null}
      </div>
    ) : null}
    {props.under !== 0 ? (
      <div
        className={styles.under}
        style={{
          width: `${(props.under / (props.under + props.selected)) * 100}%`,
        }}
      >
        {props.under}
      </div>
    ) : null}
  </div>
);
