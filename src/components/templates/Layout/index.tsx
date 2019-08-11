import * as React from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => (
  <div className={styles.container}>{props.children}</div>
);
