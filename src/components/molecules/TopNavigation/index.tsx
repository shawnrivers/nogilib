import * as React from "react";
import styles from "./topnavigation.module.scss";
import { useOnClickOutside } from "utils/hooks";
import { FormattedMessage } from "react-intl";
import { WindowLocation } from "@reach/router";
import { Language, Links } from "utils/constants";
import { NavigationItem } from "components/atoms/NavigationItem";
import { HomeIcon } from "components/atoms/icons/HomeIcon";
import { LanguageOptionItem } from "components/atoms/LanguageOptionItem";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageIcon } from "components/atoms/icons/LanguagesIcon";

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
        className={styles.button}
      >
        {type === "text" ? (
          <FormattedMessage {...({ id: "languages" } as any)} />
        ) : (
          <LanguageIcon />
        )}
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
        <div className={styles.title}>
          <NavigationItem type="link" to={Links.Singles}>
            Nogizaka Lib
          </NavigationItem>
        </div>
        {shouldShowLanguagesButton ? (
          <LanguageItem type="icon" className={styles.icon} />
        ) : (
          <NavigationItem
            type="link"
            to={Links.Singles}
            label="Nogizaka Lib"
            className={styles.home}
          >
            <HomeIcon />
          </NavigationItem>
        )}
        <div className={styles.items}>
          <NavigationItem
            type="link"
            to={Links.Singles}
            className={styles.music}
          >
            <FormattedMessage {...({ id: "music" } as any)} />
          </NavigationItem>
          <NavigationItem
            type="link"
            to={Links.FirstGeneration}
            className={styles.members}
          >
            <FormattedMessage {...({ id: "members" } as any)} />
          </NavigationItem>
          {shouldShowLanguagesButton ? (
            <LanguageItem type="text" className={styles.languages} />
          ) : null}
        </div>
      </div>
    </nav>
  );
};
