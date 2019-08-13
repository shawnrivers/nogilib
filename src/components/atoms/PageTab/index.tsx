import * as React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import { Link } from "gatsby";
import { Layout } from "components/templates/Layout";
import styles from "./pagetab.module.scss";

const AnimatedTabItem = animated(Link);

export type TabItem = {
  link: string;
  page: string;
  name: string;
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
    }))
  );

  return (
    <Layout>
      <div className={styles.container}>
        {springs.map((animation, index) => {
          const item = items[index];
          return (
            <AnimatedTabItem
              to={item.link}
              style={animation}
              className={styles.item}
              key={item.name}
            >
              {item.name}
            </AnimatedTabItem>
          );
        })}
      </div>
    </Layout>
  );
};
