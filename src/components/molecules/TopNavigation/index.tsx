import * as React from "react";
import { WindowLocation } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./topnavigation.module.scss";
import { useOnClickOutside } from "utils/hooks";
import { Language, Links } from "utils/constants";
import { NavigationItem } from "components/atoms/NavigationItem";
import { HomeIcon } from "components/atoms/icons/HomeIcon";
import { LanguageOptionItem } from "components/atoms/LanguageOptionItem";
import { LanguageIcon } from "components/atoms/icons/LanguagesIcon";
import { classNames } from "utils/strings";
import { Message } from "components/atoms/Message";

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
  const shouldShowLanguagesButton = React.useMemo(() => {
    const { pathname } = location;

    return pathname.includes("/cds/") || pathname.includes("/members-list/");
  }, [location]);

  return (
    <nav className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.leftItems}>
          <NavigationItem
            type="link"
            to="/"
            className={classNames(styles.homeText, styles.item)}
          >
            Nogizaka Lib
          </NavigationItem>
          <NavigationItem
            type="link"
            to="/"
            label="Nogizaka Lib"
            className={classNames(styles.homeIcon, styles.item)}
          >
            <HomeIcon />
          </NavigationItem>
          {shouldShowLanguagesButton ? (
            <>
              <LanguageItem type="icon" className={styles.languagesIcon} />
              <LanguageItem type="text" className={styles.languagesText} />
            </>
          ) : null}
        </div>
        <div className={styles.rightItems}>
          <NavigationItem
            type="link"
            to={Links.Singles}
            className={styles.item}
          >
            <Message text="music" />
          </NavigationItem>
          <NavigationItem type="link" to={Links.FirstGeneration}>
            <Message text="members" />
          </NavigationItem>
        </div>
      </div>
    </nav>
  );
};
