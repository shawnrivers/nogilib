import * as React from "react";
import styles from "./song.module.scss";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { motion } from "framer-motion";

const Song = () => {
  return (
    <Layout>
      <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          <ArrowBackIcon className={styles.back} />
        </button>
      </motion.div>
      <div>
        <h1>Song Page</h1>
      </div>
    </Layout>
  );
};

export default Song;
