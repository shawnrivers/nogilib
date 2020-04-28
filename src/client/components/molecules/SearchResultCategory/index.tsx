import * as React from "react";
import styles from "./searchresultcategory.module.scss";
import { SearchResultCard } from "client/components/atoms/SearchResultCard";
import { Message } from "client/components/atoms/Message";

interface SearchResultCategoryProps {
  title: string;
  results: {
    to: string;
    imgSrc: string;
    heading: string;
    caption: string;
    secondCaption?: string;
  }[];
  className?: string;
}

export const SearchResultCategory = ({
  title,
  results,
  className,
}: SearchResultCategoryProps) => {
  const [showMore, toggleShowMore] = React.useState(false);

  return results.length > 0 ? (
    <div className={className}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Message text={title} />
        </h2>
        {results.length > 3 ? (
          !showMore ? (
            <button
              onClick={() => toggleShowMore(true)}
              className={styles.moreToggle}
            >
              <Message text="show all" />
            </button>
          ) : (
            <button
              onClick={() => toggleShowMore(false)}
              className={styles.moreToggle}
            >
              <Message text="show less" />
            </button>
          )
        ) : null}
      </div>
      <ul className={styles.resultCardList}>
        {results.slice(0, 3).map(result => (
          <li key={result.heading} className={styles.resultCard}>
            <SearchResultCard
              to={result.to}
              imgSrc={result.imgSrc}
              title={result.heading}
              caption={result.caption}
              secondCaption={result.secondCaption}
            />
          </li>
        ))}
        {showMore
          ? results.slice(3, results.length).map(result => (
              <li key={result.heading} className={styles.resultCard}>
                <SearchResultCard
                  to={result.to}
                  imgSrc={result.imgSrc}
                  title={result.heading}
                  caption={result.caption}
                  secondCaption={result.secondCaption}
                />
              </li>
            ))
          : null}
      </ul>
    </div>
  ) : null;
};
