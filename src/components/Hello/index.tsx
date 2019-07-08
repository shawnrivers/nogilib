import * as React from "react";
import styles from "./Hello.module.css";

interface IHelloProps {
  title: string;
}

export const Hello = ({ title }: IHelloProps) => (
  <p className={styles.paragraph}>Hello, {title}!</p>
);
