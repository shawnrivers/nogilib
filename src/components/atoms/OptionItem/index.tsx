import * as React from "react";
import styles from "./optionitem.module.scss";
import { Link } from "gatsby";

interface OptionItemProps {
  to: string;
  children: React.ReactNode;
  handleClick?(): void;
}

export const OptionItem = ({ to, children, handleClick }: OptionItemProps) => {
  const liProps = handleClick
    ? {
        onClick: handleClick,
      }
    : null;

  return (
    <li {...liProps}>
      <Link to={to}>
        <span className={styles.text}>{children}</span>
      </Link>
    </li>
  );
};
