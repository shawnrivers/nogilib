import * as React from "react";
import { motion } from "framer-motion";
import styles from "./navigationitem.module.scss";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { classNames } from "utils/strings";

const fade = {
  hovered: {
    backgroundColor: "#595959",
    color: "#ffffff",
    fill: "#ffffff",
  },
  current: {
    backgroundColor: "#ffffff",
    color: "#e887a3",
    fill: "#e887a3",
  },
  normal: {
    backgroundColor: "#ffffff",
    color: "#595959",
    fill: "#595959",
  },
};

interface NavigationItemProps {
  type: "link" | "button";
  children: React.ReactNode;
  isCurrentTab?: boolean;
  to?: string;
  label?: string;
  className?: string;
  handleClick?(): void;
}

export const NavigationItem = ({
  type,
  children,
  isCurrentTab,
  to,
  handleClick,
  label,
  className,
}: NavigationItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isCurrent = React.useMemo(() => (isCurrentTab ? isCurrentTab : false), [
    isCurrentTab,
  ]);

  const animate = React.useMemo(
    () => (isCurrent ? "current" : isHovered ? "hovered" : "normal"),
    [isHovered, isCurrent]
  );

  if (type === "link") {
    return to ? (
      <LocalizedLink to={to} label={label}>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={animate}
          variants={fade}
          className={classNames(styles.container, className)}
        >
          {children}
        </motion.div>
      </LocalizedLink>
    ) : (
      <motion.span
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={animate}
        variants={fade}
        className={classNames(styles.container, className)}
      >
        {children}
      </motion.span>
    );
  }

  return handleClick ? (
    <motion.button
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animate}
      variants={fade}
      aria-label={label}
      className={classNames(styles.container, className)}
    >
      {children}
    </motion.button>
  ) : (
    <motion.span
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animate}
      variants={fade}
      className={classNames(styles.container, className)}
    >
      {children}
    </motion.span>
  );
};
