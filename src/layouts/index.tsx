import * as React from "react";
import { RouteComponentProps, WindowLocation } from "@reach/router";
import { motion, AnimatePresence } from "framer-motion";
import { IntlProvider } from "react-intl";
import { Language } from "utils/constants";
import en from "i18n/en.json";
import ja from "i18n/ja.json";
import zh from "i18n/zh.json";
import { TopNavigation } from "components/molecules/TopNavigation";
import styles from "./applayout.module.scss";

const messages = { en, ja, zh };

interface AppLayoutProps {
  children: React.ReactNode;
  pageContext: {
    locale: Language;
  };
}

const layoutVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const AppLayout = ({
  children,
  location,
  pageContext,
}: RouteComponentProps<AppLayoutProps>) => {
  const pathName = React.useMemo(() => {
    if (location) {
      const { pathname } = location;
      return pathname[pathname.length - 1] === "/"
        ? pathname.slice(0, -1)
        : pathname;
    }
    return "";
  }, [location]);

  const locale = pageContext ? pageContext.locale : Language.En;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AnimatePresence>
        <div className={styles.container}>
          <TopNavigation
            locale={locale}
            location={location as WindowLocation}
          />
          <motion.main
            key={pathName}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={layoutVariants}
            transition={{ duration: 0.3 }}
            className={styles.contents}
          >
            {children}
          </motion.main>
        </div>
      </AnimatePresence>
    </IntlProvider>
  );
};

export default AppLayout;
