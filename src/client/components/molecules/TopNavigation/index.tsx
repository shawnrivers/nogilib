import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./topnavigation.module.scss";
import { useOnClickOutside } from "client/utils/hooks";
import { NavigationItem } from "client/components/atoms/NavigationItem";
import { LanguageOptionItem } from "client/components/atoms/LanguageOptionItem";
import { LanguageIcon } from "client/components/atoms/icons/LanguagesIcon";
import { MusicIcon } from "client/components/atoms/icons/MusicIcon";
import { MoreIcon } from "client/components/atoms/icons/MoreIcon";
import { MembersIcon } from "client/components/atoms/icons/MembersIcon";
import { SearchIcon } from "client/components/atoms/icons/SearchIcon";
import { SideBar } from "client/components/molecules/SideBar";
import { Message } from "client/components/atoms/Message";
import { classNames } from "client/utils/strings";
import { Links } from "client/utils/constants";

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
  pathName: string;
}

export const TopNavigation = ({ pathName }: TopNavigationProps) => {
  const [isSideBarOpened, toggleSideBar] = React.useState(false);

  const isInMusicPage = React.useMemo(() => pathName.includes("/cds"), [
    pathName,
  ]);

  const isInMembersPage = React.useMemo(
    () => pathName.includes("/members-list"),
    [pathName]
  );

  const isInSearchPage = React.useMemo(() => pathName.includes("/search"), [
    pathName,
  ]);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.navigationSmallContainer}>
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
              isCurrentTab={isInMusicPage}
              className={styles.iconTextItem}
            >
              <MusicIcon className={styles.icon} />
              <span className={styles.iconText}>
                <Message text="music" />
              </span>
            </NavigationItem>
            <NavigationItem
              type="link"
              to={Links.FirstGeneration}
              isCurrentTab={isInMembersPage}
              className={styles.iconTextItem}
            >
              <MembersIcon className={styles.icon} />
              <span className={styles.iconText}>
                <Message text="members" />
              </span>
            </NavigationItem>
            <NavigationItem
              type="link"
              to={Links.Search}
              isCurrentTab={isInSearchPage}
              className={styles.iconTextItem}
            >
              <SearchIcon className={styles.icon} />
              <span className={styles.iconText}>
                <Message text="search" />
              </span>
            </NavigationItem>
          </div>
        </div>
        <div className={styles.navigationLargeContainer}>
          <div className={styles.navigationLarge}>
            <div className={styles.leftItems}>
              <NavigationItem
                type="link"
                to={Links.Singles}
                isCurrentTab={isInMusicPage}
                className={styles.item}
              >
                <Message text="music" />
              </NavigationItem>
              <NavigationItem
                type="link"
                to={Links.FirstGeneration}
                isCurrentTab={isInMembersPage}
                className={styles.item}
              >
                <Message text="members" />
              </NavigationItem>
              <NavigationItem
                type="link"
                to={Links.Search}
                isCurrentTab={isInSearchPage}
                className={styles.item}
              >
                <Message text="search" />
              </NavigationItem>
            </div>
            <div className={styles.rightItems}>
              <LanguageItem
                type="text"
                className={classNames(styles.languagesText, styles.item)}
              />
              <NavigationItem
                type="link"
                to={Links.About}
                className={styles.item}
              >
                <Message text="about" />
              </NavigationItem>
            </div>
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
