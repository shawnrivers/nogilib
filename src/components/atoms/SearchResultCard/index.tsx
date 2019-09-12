import * as React from "react";
import styles from "./searchresultcard.module.scss";
import { LazyImage } from "components/atoms/LazyImage";
import { classNames } from "utils/strings";

interface SearchResultCardProps {
  imgSrc: string;
  imgSrcSet: string;
  title: string;
  caption: string;
  secondCaption?: string;
  className?: string;
}

export const SearchResultCard = ({
  imgSrc,
  imgSrcSet,
  title,
  caption,
  secondCaption,
  className,
}: SearchResultCardProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.imagePlaceholder}>
        <LazyImage
          notLazy
          src={imgSrc}
          srcSet={imgSrcSet}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.caption}>
          <span>{caption}</span>
          {secondCaption ? <span>{secondCaption}</span> : null}
        </p>
      </div>
    </div>
  );
};
