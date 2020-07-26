import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styles from './sidebar.module.scss';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { Message } from 'client/components/atoms/Message';
import { getUrlWithTrailingSlash } from 'utils/strings';
import { Links } from 'client/utils/constants';

const backgroundFade = {
  opened: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const sideBarFade = {
  opened: { x: '0', transition: { duration: 0.2 } },
  closed: { x: '-102vw', transition: { duration: 0.2 } },
};

interface SideBarProps {
  open: boolean;
  handleClose(): void;
}

export const SideBar = ({ open, handleClose }: SideBarProps) => {
  return (
    <>
      <motion.div
        animate={open ? 'opened' : 'closed'}
        variants={backgroundFade}
        className={styles.background}
      />
      <motion.div
        animate={open ? 'opened' : 'closed'}
        variants={sideBarFade}
        onClick={() => handleClose()}
        className={styles.invisibleBackground}
      />
      <motion.div
        animate={open ? 'opened' : 'closed'}
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
            <Link to={Links.Singles} onClick={() => handleClose()}>
              <Message text="music" />
            </Link>
          </p>
          <p className={styles.page}>
            <Link to={Links.FirstGeneration} onClick={() => handleClose()}>
              <Message text="members" />
            </Link>
          </p>
          <p className={styles.page}>
            <Link to={Links.Search} onClick={() => handleClose()}>
              <Message text="search" />
            </Link>
          </p>
          <hr className={styles.divider} />
          <p className={styles.page}>
            <Link to={Links.About} onClick={() => handleClose()}>
              <Message text="about" />
            </Link>
          </p>
        </div>
        <div className={styles.languages}>
          <span className={styles.language}>
            <Link
              to={getUrlWithTrailingSlash('/en' + Links.Singles)}
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
              to={getUrlWithTrailingSlash('/zh' + Links.Singles)}
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
