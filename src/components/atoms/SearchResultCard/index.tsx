import * as React from "react";
import styles from "./searchresultcard.module.scss";
import { LazyImage } from "components/atoms/LazyImage";

interface SearchResultCardProps {
  imgSrc: string;
  imgSrcSet: string;
  title: string;
  caption: string;
  secondCaption?: string;
}

export const SearchResultCard = ({
  imgSrc,
  imgSrcSet,
  title,
  caption,
  secondCaption,
}: SearchResultCardProps) => {
  return (
    <div className={styles.container}>
      <LazyImage
        notLazy
        src={imgSrc}
        srcSet={imgSrcSet}
        alt={title}
        className={styles.image}
        placeholder={<div className={styles.imagePlaceholder} />}
      />
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
