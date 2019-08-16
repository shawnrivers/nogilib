import * as React from "react";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { FormattedMessage } from "react-intl";
import { Layout } from "components/atoms/Layout";
import styles from "./pagetab.module.scss";

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
    <Layout className={`${className ? className + " " : ""}`}>
      <div className={styles.container}>
        {items.map(item => (
          <div
            style={
              item.page === currentItem
                ? {
                    fontSize: "20px",
                    borderBottomWidth: "3px",
                    borderBottomColor: "rgba(89, 89, 89, 1)",
                  }
                : { fontSize: "16px", borderBottomWidth: "0px" }
            }
            className={styles.item}
            key={item.page}
          >
            <LocalizedLink
              to={item.link}
              handleClick={() => setCurrentItem(item.page)}
            >
              <FormattedMessage {...({ id: item.page } as any)} />
            </LocalizedLink>
          </div>
        ))}
      </div>
    </Layout>
  );
};
