import * as React from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => (
  <div className={`${styles.container}${className ? " " + className : ""}`}>
    {children}
  </div>
);
