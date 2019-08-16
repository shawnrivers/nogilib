import * as React from "react";
import styles from "./topnavigation.module.scss";
import { useOnClickOutside } from "utils/hooks";
import { FormattedMessage } from "react-intl";
import { WindowLocation } from "@reach/router";
import { Language } from "utils/constants";
import locales from "i18n/locales";
import { NavigationItem } from "components/atoms/NavigationItem";
import { OptionItem } from "components/atoms/OptionItem";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageIcon } from "components/atoms/icons/LanguagesIcon";

interface LanguageItemProps {
  type: "text" | "icon";
  locale: Language;
  location: WindowLocation;
  className?: string;
}

const LanguageItem = ({
  type,
  className,
  locale,
  location,
}: LanguageItemProps) => {
  const [isLanguagesToggled, setLanguagesToggle] = React.useState(false);

  const languagesRef = React.useRef(null);
  useOnClickOutside(languagesRef, () => {
    setLanguagesToggle(false);
  });

  const rawPath = React.useMemo(() => {
    if (location) {
      const query = location.search;

      return (
        (locales[locale as Language].default
          ? location.pathname
          : location.pathname.slice(3)) + query
      );
    }

    return "";
  }, [location, locale]);

  const currentLocalizedPaths = React.useMemo(
    () => ({
      en: "/en" + rawPath,
      ja: rawPath,
      zh: "/zh" + rawPath,
    }),
    [rawPath]
  );

  return (
    <div className={className} ref={languagesRef}>
      <NavigationItem
        type="button"
        handleClick={() => setLanguagesToggle(!isLanguagesToggled)}
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
              <OptionItem
                to={currentLocalizedPaths.en}
                handleClick={() => setLanguagesToggle(false)}
              >
                English
              </OptionItem>
              <OptionItem
                to={currentLocalizedPaths.ja}
                handleClick={() => setLanguagesToggle(false)}
              >
                日本語
              </OptionItem>
              <OptionItem
                to={currentLocalizedPaths.zh}
                handleClick={() => setLanguagesToggle(false)}
              >
                简体中文
              </OptionItem>
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

export const TopNavigation = ({ locale, location }: TopNavigationProps) => {
  return (
    <nav className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.title}>Nogizaka Lib</div>
        <LanguageItem
          type="icon"
          className={styles.icon}
          locale={locale}
          location={location}
        />
        <div className={styles.items}>
          <NavigationItem
            type="link"
            to="/cds/?page=singles"
            className={styles.music}
          >
            <FormattedMessage {...({ id: "music" } as any)} />
          </NavigationItem>
          <NavigationItem
            type="link"
            to="/members/?page=first-gen"
            className={styles.members}
          >
            <FormattedMessage {...({ id: "members" } as any)} />
          </NavigationItem>
          <LanguageItem
            type="text"
            className={styles.languages}
            locale={locale}
            location={location}
          />
        </div>
      </div>
    </nav>
  );
};
