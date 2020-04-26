import * as React from "react";
import styles from "./pagetabs.module.scss";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import { PageTab } from "client/components/atoms/PageTab";

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
    <PageContentLayout type="top" className={className}>
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
    </PageContentLayout>
  );
};
