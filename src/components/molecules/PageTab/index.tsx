import * as React from "react";
import styles from "./pagetab.module.scss";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Layout } from "components/atoms/Layout";
import { classNames } from "utils/strings";
import { Message } from "components/atoms/Message";

export type TabItem = {
  link: string;
  page: string;
};

interface PageTabProps {
  items: TabItem[];
  selectedItem: string;
  className?: string;
}

export const PageTab = ({ items, selectedItem, className }: PageTabProps) => {
  const [currentItem, setCurrentItem] = React.useState(selectedItem);

  return (
    <Layout className={classNames(styles.layout, className)}>
      <div className={styles.container}>
        {items.map(item => {
          return (
            <div
              className={classNames(
                styles.item,
                item.page === currentItem ? styles.active : styles.inactive
              )}
              key={item.page}
            >
              <LocalizedLink
                to={item.link}
                handleClick={() => setCurrentItem(item.page)}
              >
                <Message text={item.page} />
              </LocalizedLink>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
