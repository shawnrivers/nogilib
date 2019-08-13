import * as React from "react";
import styles from "./optionitem.module.scss";
import { Link } from "gatsby";
import { motion } from "framer-motion";

interface OptionItemProps {
  to: string;
  children: React.ReactNode;
  handleClick?(): void;
}

export const OptionItem = ({ to, children, handleClick }: OptionItemProps) => {
  const [isMouseHovered, setMouseHover] = React.useState(false);

  const liProps = React.useMemo(
    () =>
      handleClick
        ? {
            onClick: handleClick,
            onMouseEnter: () => setMouseHover(true),
            onMouseLeave: () => setMouseHover(false),
          }
        : {
            onMouseEnter: () => setMouseHover(true),
            onMouseLeave: () => setMouseHover(false),
          },
    [handleClick]
  );

  return (
    <li {...liProps}>
      <Link to={to}>
        <motion.span
          whileHover={{
            borderBottomWidth: "2px",
            borderBottomColor: "rgba(89,89,89,1)",
          }}
          className={styles.text}
        >
          {children}
        </motion.span>
      </Link>
    </li>
  );
};
