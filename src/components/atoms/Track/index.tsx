import * as React from "react";
import styles from "./track.module.scss";
import { focusPerformersType, SongType } from "types/responseTypes";
import { injectIntl, FormattedMessage } from "react-intl";
import { Language } from "utils/constants";

interface TrackProps {
  number: number;
  title: string;
  type: SongType;
  focusPerformers: {
    name: string[];
    type: focusPerformersType;
  };
  locale: Language;
  className?: string;
}

export const Track = (props: TrackProps) => {
  const focusPerformersText = React.useMemo(() => {
    const { focusPerformers } = props;
    let comma: string;
    switch (props.locale) {
      case Language.Zh:
        comma = "、";
        break;
      case Language.Ja:
        comma = "・";
        break;
      default:
        comma = ", ";
        break;
    }

    if (focusPerformers.name.length > 0) {
      if (focusPerformers.type === focusPerformersType.Center) {
        return (
          "C: " + focusPerformers.name.reduce((acc, curr) => acc + comma + curr)
        );
      }
      return focusPerformers.name.reduce((acc, curr) => acc + comma + curr);
    }
    return "";
  }, [props.focusPerformers, props.locale]);

  return (
    <div
      className={`${styles.container} + ${
        props.className ? " " + props.className : ""
      }`}
    >
      <span className={styles.number}>{props.number}.</span>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.description}>
          <span>
            #<FormattedMessage {...({ id: props.type } as any)} />
          </span>
          <span>{focusPerformersText}</span>
        </div>
      </div>
    </div>
  );
};
