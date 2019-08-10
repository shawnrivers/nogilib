import * as React from "react";
import styles from "./Hello.module.css";

interface HelloProps {
  title: string;
}

export const Hello = ({ title }: HelloProps) => (
  <p className={styles.paragraph}>Hello, {title}!</p>
);
