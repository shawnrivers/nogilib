import * as React from "react";
import styles from "./pagetabs.module.scss";
import { Layout } from "components/atoms/Layout";
import { classNames } from "utils/strings";
import { PageTab } from "components/atoms/PageTab";

export type TabItem = {
  link: string;
  page: string;
};

interface PageTabsProps {
  items: TabItem[];
  selectedItem: string;
  className?: string;
}

export const PageTabs = ({ items, selectedItem, className }: PageTabsProps) => {
  return (
    <Layout className={classNames(styles.layout, className)}>
      <ul className={styles.container}>
        {items.map(item => (
          <PageTab
            key={item.page}
            text={item.page}
            to={item.link}
            isSelected={item.page === selectedItem}
            className={styles.item}
          />
        ))}
      </ul>
    </Layout>
  );
};
