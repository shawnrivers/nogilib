import * as React from "react";
import { motion } from "framer-motion";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { FormattedMessage } from "react-intl";
import { Layout } from "components/templates/Layout";
import styles from "./pagetab.module.scss";

export type TabItem = {
  link: string;
  page: string;
};

const variants = {
  active: {
    fontSize: "20px",
    fontWeight: 700,
    borderBottomWidth: "3px",
    borderBottomColor: "rgba(89, 89, 89, 1)",
  },
  inactive: {
    fontSize: "16px",
    fontWeight: 500,
    borderBottomWidth: "0px",
    borderBottomColor: "rgba(89, 89, 89, 0)",
  },
};

interface PageTabProps {
  items: TabItem[];
  selectedItem: string;
}

export const PageTab = ({ items, selectedItem }: PageTabProps) => {
  return (
    <Layout>
      <div className={styles.container}>
        {items.map(item => (
          <motion.div
            animate={item.page === selectedItem ? "active" : "inactive"}
            variants={variants}
            className={styles.item}
            key={item.page}
          >
            <LocalizedLink to={item.link}>
              <FormattedMessage {...({ id: item.page } as any)} />
            </LocalizedLink>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};
