import * as React from "react";
import { WindowLocation } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./topnavigation.module.scss";
import { useOnClickOutside } from "utils/hooks";
import { Language, Links } from "utils/constants";
import { NavigationItem } from "components/atoms/NavigationItem";
import { LanguageOptionItem } from "components/atoms/LanguageOptionItem";
import { LanguageIcon } from "components/atoms/icons/LanguagesIcon";
import { classNames } from "utils/strings";
import { Message } from "components/atoms/Message";
import { MusicIcon } from "components/atoms/icons/MusicIcon";
import { MoreIcon } from "components/atoms/icons/MoreIcon";
import { MembersIcon } from "components/atoms/icons/MembersIcon";
import { SearchIcon } from "components/atoms/icons/SearchIcon";
import { SideBar } from "components/molecules/SideBar";

interface LanguageItemProps {
  type: "text" | "icon";
  className?: string;
}

const LanguageItem = ({ type, className }: LanguageItemProps) => {
  const [isLanguagesToggled, setLanguagesToggle] = React.useState(false);

  const languagesRef = React.useRef(null);
  useOnClickOutside(languagesRef, () => {
    setLanguagesToggle(false);
  });

  return (
    <div className={className} ref={languagesRef}>
      <NavigationItem
        type="button"
        handleClick={() => setLanguagesToggle(!isLanguagesToggled)}
        label="languages"
      >
        {type === "text" ? <Message text="languages" /> : <LanguageIcon />}
      </NavigationItem>
      <AnimatePresence>
        {isLanguagesToggled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className={styles.options}
          >
            <ul>
              <LanguageOptionItem
                to={"/en" + Links.Singles}
                handleClick={() => setLanguagesToggle(false)}
              >
                English
              </LanguageOptionItem>
              <LanguageOptionItem
                to={Links.Singles}
                handleClick={() => setLanguagesToggle(false)}
              >
                日本語
              </LanguageOptionItem>
              <LanguageOptionItem
                to={"/zh" + Links.Singles}
                handleClick={() => setLanguagesToggle(false)}
              >
                简体中文
              </LanguageOptionItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface TopNavigationProps {
  locale: Language;
  location: WindowLocation;
}

export const TopNavigation = ({ location }: TopNavigationProps) => {
  const [isSideBarOpened, toggleSideBar] = React.useState(false);

  const isInMusicPage = React.useMemo(
    () => location.pathname.includes("/cds/"),
    [location.pathname]
  );

  const isInMembersPage = React.useMemo(
    () => location.pathname.includes("/members-list/"),
    [location.pathname]
  );

  const isInSearchPage = React.useMemo(
    () => location.pathname.includes("/search/"),
    [location.pathname]
  );

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.navigationSmall}>
          <NavigationItem
            type="button"
            to={Links.About}
            handleClick={() => {
              toggleSideBar(true);
            }}
            className={styles.iconTextItem}
          >
            <MoreIcon className={styles.icon} />
            <span className={styles.iconText}>
              <Message text="more" />
            </span>
          </NavigationItem>
          <NavigationItem
            type="link"
            to={Links.Singles}
            className={
              isInMusicPage
                ? styles.iconTextItemHighlighted
                : styles.iconTextItem
            }
          >
            <MusicIcon className={styles.icon} />
            <span className={styles.iconText}>
              <Message text="music" />
            </span>
          </NavigationItem>
          <NavigationItem
            type="link"
            to={Links.FirstGeneration}
            className={
              isInMembersPage
                ? styles.iconTextItemHighlighted
                : styles.iconTextItem
            }
          >
            <MembersIcon className={styles.icon} />
            <span className={styles.iconText}>
              <Message text="members" />
            </span>
          </NavigationItem>
          <NavigationItem
            type="link"
            to={Links.Search}
            className={
              isInSearchPage
                ? styles.iconTextItemHighlighted
                : styles.iconTextItem
            }
          >
            <SearchIcon className={styles.icon} />
            <span className={styles.iconText}>
              <Message text="search" />
            </span>
          </NavigationItem>
        </div>
        <div className={styles.navigationLarge}>
          <div className={styles.leftItems}>
            <NavigationItem
              type="link"
              to={Links.Singles}
              className={styles.item}
            >
              <Message text="music" />
            </NavigationItem>
            <NavigationItem
              type="link"
              to={Links.FirstGeneration}
              className={styles.item}
            >
              <Message text="members" />
            </NavigationItem>
            <NavigationItem
              type="link"
              to={Links.Search}
              className={styles.item}
            >
              <Message text="search" />
            </NavigationItem>
          </div>
          <div className={styles.rightItems}>
            {isInMusicPage || isInMembersPage ? (
              <LanguageItem
                type="text"
                className={classNames(styles.languagesText, styles.item)}
              />
            ) : null}
            <NavigationItem
              type="link"
              to={Links.About}
              className={styles.item}
            >
              <Message text="about" />
            </NavigationItem>
          </div>
        </div>
      </nav>
      <SideBar
        open={isSideBarOpened}
        handleClose={() => {
          toggleSideBar(false);
        }}
      />
    </>
  );
};
