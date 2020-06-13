import * as React from "react";
import styles from "./positionbadge.module.scss";
import { PositionType } from "server/actors/Members/constants/position";

interface PositionBadgeProps {
  position: PositionType;
}

export const PositionBadge = (props: PositionBadgeProps) => {
  let history = "";
  switch (props.position) {
    case PositionType.Center:
      history = "C";
      break;
    case PositionType.Fukujin:
      history = "F";
      break;
    case PositionType.Selected:
      history = "S";
      break;
    case PositionType.Under:
      history = "U";
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      {history !== "" ? (
        <span className={`${styles.position} ${styles[`${props.position}`]}`}>
          {history}
        </span>
      ) : (
        <span className={styles.none} />
      )}
    </div>
  );
};
