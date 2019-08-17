import * as React from "react";
import styles from "./navigationitem.module.scss";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { motion } from "framer-motion";

interface NavigationItemProps {
  type: "link" | "button";
  children: React.ReactNode;
  to?: string;
  className?: string;
  handleClick?(): void;
}

export const NavigationItem = ({
  type,
  children,
  to,
  handleClick,
  className,
}: NavigationItemProps) => {
  if (type === "link") {
    return to ? (
      <LocalizedLink to={to} className={className ? className : undefined}>
        <motion.div
          whileHover={{ backgroundColor: "rgba(89,89,89)", color: "#ffffff" }}
          className={styles.container}
        >
          {children}
        </motion.div>
      </LocalizedLink>
    ) : (
      <motion.span
        whileHover={{ backgroundColor: "rgba(89,89,89)", color: "#ffffff" }}
        className={`${styles.container}${className ? " " + className : ""}`}
      >
        {children}
      </motion.span>
    );
  }

  return handleClick ? (
    <motion.button
      onClick={handleClick}
      whileHover={{
        backgroundColor: "rgba(89,89,89)",
        color: "#ffffff",
        fill: "#ffffff",
      }}
      className={`${styles.container}${className ? " " + className : ""}`}
    >
      {children}
    </motion.button>
  ) : (
    <motion.span
      whileHover={{ backgroundColor: "rgba(89,89,89)", color: "#ffffff" }}
      className={`${styles.container}${className ? " " + className : ""}`}
    >
      {children}
    </motion.span>
  );
};
