import * as React from "react";
import { animated, useSprings, config } from "react-spring";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { FormattedMessage } from "react-intl";
import { Layout } from "components/templates/Layout";
import styles from "./pagetab.module.scss";

export type TabItem = {
  link: string;
  page: string;
};

interface PageTabProps {
  items: TabItem[];
  selectedItem: string;
}

export const PageTab = ({ items, selectedItem }: PageTabProps) => {
  const springs = useSprings(
    items.length,
    items.map(item => ({
      fontSize: item.page === selectedItem ? "20px" : "16px",
      fontWeight: item.page === selectedItem ? 700 : 500,
      borderBottomWidth: item.page === selectedItem ? "3px" : "0px",
      borderBottomColor:
        item.page === selectedItem
          ? "rgba(89, 89, 89, 1)"
          : "rgba(89, 89, 89, 0)",
      config: config.gentle,
    }))
  );

  return (
    <Layout>
      <div className={styles.container}>
        {springs.map((animation, index) => {
          const item = items[index];

          return (
            <animated.div
              key={item.page}
              style={animation}
              className={styles.item}
            >
              <LocalizedLink to={item.link}>
                <FormattedMessage {...({ id: item.page } as any)} />
              </LocalizedLink>
            </animated.div>
          );
        })}
      </div>
    </Layout>
  );
};
