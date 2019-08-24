import * as React from "react";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { FormattedMessage } from "react-intl";
import { Layout } from "components/atoms/Layout";
import styles from "./pagetab.module.scss";
import { classNames } from "../../../utils/strings";

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
    <Layout className={className}>
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
                <FormattedMessage {...({ id: item.page } as any)} />
              </LocalizedLink>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
