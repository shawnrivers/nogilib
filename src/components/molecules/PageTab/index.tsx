import * as React from "react";
import { motion } from "framer-motion";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { FormattedMessage } from "react-intl";
import { Layout } from "components/atoms/Layout";
import styles from "./pagetab.module.scss";

export type TabItem = {
  link: string;
  page: string;
};

const variants = {
  active: {
    fontSize: "20px",
    borderBottomWidth: "3px",
    borderBottomColor: "rgba(89, 89, 89, 1)",
  },
  inactive: {
    fontSize: "16px",
    borderBottomWidth: "0px",
    borderBottomColor: "rgba(89, 89, 89, 0)",
  },
};

interface PageTabProps {
  items: TabItem[];
  selectedItem: string;
  className?: string;
}

export const PageTab = ({ items, selectedItem, className }: PageTabProps) => {
  return (
    <Layout className={`${className ? className + " " : ""}`}>
      <div className={styles.container}>
        {items.map(item => (
          <motion.div
            initial={false}
            animate={item.page === selectedItem ? "active" : "inactive"}
            transition={{ duration: 0.08 }}
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
