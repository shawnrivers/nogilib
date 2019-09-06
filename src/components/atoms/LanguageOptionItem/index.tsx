import * as React from "react";
import styles from "./languageoptionitem.module.scss";
import { Link } from "gatsby";

interface LanguageOptionItemProps {
  to: string;
  children: React.ReactNode;
  handleClick?(): void;
}

export const LanguageOptionItem = ({
  to,
  children,
  handleClick,
}: LanguageOptionItemProps) => {
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
