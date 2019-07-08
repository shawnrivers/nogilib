import * as React from 'react';
import styles from './Hello.module.css';

export const Hello = (props: { title: string }) => (
  <p className={styles.paragraph}>Hello, {props.title}!</p>
);
