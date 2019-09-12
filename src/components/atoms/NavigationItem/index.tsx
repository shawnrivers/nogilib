import * as React from "react";
import { motion } from "framer-motion";
import styles from "./navigationitem.module.scss";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { classNames } from "utils/strings";

interface NavigationItemProps {
  type: "link" | "button";
  children: React.ReactNode;
  to?: string;
  label?: string;
  className?: string;
  handleClick?(): void;
}

export const NavigationItem = ({
  type,
  children,
  to,
  handleClick,
  label,
  className,
}: NavigationItemProps) => {
  if (type === "link") {
    return to ? (
      <LocalizedLink to={to} label={label}>
        <motion.div
          whileHover={{
            backgroundColor: "rgba(89,89,89)",
            color: "#ffffff",
            fill: "#ffffff",
          }}
          className={classNames(styles.container, className)}
        >
          {children}
        </motion.div>
      </LocalizedLink>
    ) : (
      <motion.span
        whileHover={{
          backgroundColor: "rgba(89,89,89)",
          color: "#ffffff",
          fill: "#ffffff",
        }}
        className={classNames(styles.container, className)}
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
      aria-label={label}
      className={classNames(styles.container, className)}
    >
      {children}
    </motion.button>
  ) : (
    <motion.span
      whileHover={{
        backgroundColor: "rgba(89,89,89)",
        color: "#ffffff",
        fill: "#ffffff",
      }}
      className={classNames(styles.container, className)}
    >
      {children}
    </motion.span>
  );
};
