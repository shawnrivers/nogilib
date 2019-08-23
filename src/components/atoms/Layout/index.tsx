import * as React from "react";
import styles from "./layout.module.scss";
import { classNames } from "utils/strings";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);
