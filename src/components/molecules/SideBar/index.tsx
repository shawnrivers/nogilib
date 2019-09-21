import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import styles from "./sidebar.module.scss";
import { CloseIcon } from "components/atoms/icons/CloseIcon";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Links } from "utils/constants";
import { getUrlWithTrailingSlash } from "utils/strings";
import { Message } from "components/atoms/Message";

const backgroundFade = {
  opened: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const sideBarFade = {
  opened: { x: "0", transition: { duration: 0.2 } },
  closed: { x: "-102vw", transition: { duration: 0.2 } },
};

interface SideBarProps {
  open: boolean;
  handleClose(): void;
}

export const SideBar = ({ open, handleClose }: SideBarProps) => {
  return (
    <>
      <motion.div
        animate={open ? "opened" : "closed"}
        variants={backgroundFade}
        className={styles.background}
      />
      <motion.div
        animate={open ? "opened" : "closed"}
        variants={sideBarFade}
        onClick={() => handleClose()}
        className={styles.invisibleBackground}
      />
      <motion.div
        animate={open ? "opened" : "closed"}
        variants={sideBarFade}
        className={styles.sideBar}
      >
        <div className={styles.closeIconContainer}>
          <button aria-label="Close" onClick={() => handleClose()}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.pages}>
          <p className={styles.page}>
            <LocalizedLink to={Links.Singles} handleClick={() => handleClose()}>
              <Message text="music" />
            </LocalizedLink>
          </p>
          <p className={styles.page}>
            <LocalizedLink
              to={Links.FirstGeneration}
              handleClick={() => handleClose()}
            >
              <Message text="members" />
            </LocalizedLink>
          </p>
          <p className={styles.page}>
            <LocalizedLink to={Links.Search} handleClick={() => handleClose()}>
              <Message text="search" />
            </LocalizedLink>
          </p>
          <hr className={styles.divider} />
          <p className={styles.page}>
            <LocalizedLink to={Links.About} handleClick={() => handleClose()}>
              <Message text="about" />
            </LocalizedLink>
          </p>
        </div>
        <div className={styles.languages}>
          <span className={styles.language}>
            <Link
              to={getUrlWithTrailingSlash("/en" + Links.Singles)}
              onClick={() => handleClose()}
            >
              EN
            </Link>
          </span>
          <span className={styles.language}>
            <Link
              to={getUrlWithTrailingSlash(Links.Singles)}
              onClick={() => handleClose()}
            >
              日
            </Link>
          </span>
          <span className={styles.language}>
            <Link
              to={getUrlWithTrailingSlash("/zh" + Links.Singles)}
              onClick={() => handleClose()}
            >
              简
            </Link>
          </span>
        </div>
      </motion.div>
    </>
  );
};
