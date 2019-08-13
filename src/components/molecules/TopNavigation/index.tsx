import * as React from "react";
import styles from "./topnavigation.module.scss";
import { Layout } from "components/templates/Layout";
import { useOnClickOutside } from "utils/hooks";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "@reach/router";
import { Language } from "utils/constants";
import locales from "i18n/locales";
import { NavigationItem } from "components/atoms/NavigationItem";
import { OptionItem } from "components/atoms/OptionItem";
import { AnimatePresence, motion } from "framer-motion";

interface TopNavigationProps {
  locale: Language;
}

export const TopNavigation = ({
  location,
  locale,
}: RouteComponentProps<TopNavigationProps>) => {
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

  const [isLanguagesToggled, setLanguagesToggle] = React.useState(false);

  const languagesRef = React.useRef(null);
  useOnClickOutside(languagesRef, () => {
    setLanguagesToggle(false);
  });

  return (
    <nav>
      <Layout className={styles.navigation}>
        <div className={styles.title}>Nogizaka Lib</div>
        <div className={styles.items}>
          <NavigationItem
            type="link"
            to="/cds/?page=singles"
            className={styles.item}
          >
            <FormattedMessage {...({ id: "music" } as any)} />
          </NavigationItem>
          <NavigationItem type="link" className={styles.item}>
            <FormattedMessage {...({ id: "members" } as any)} />
          </NavigationItem>
          <div
            className={`${styles.languages} ${styles.item}`}
            ref={languagesRef}
          >
            <NavigationItem
              type="button"
              handleClick={() => setLanguagesToggle(!isLanguagesToggled)}
              className={styles.button}
            >
              <FormattedMessage {...({ id: "languages" } as any)} />
            </NavigationItem>
            <AnimatePresence>
              {isLanguagesToggled && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
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
        </div>
      </Layout>
    </nav>
  );
};
