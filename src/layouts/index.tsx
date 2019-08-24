import * as React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, WindowLocation } from "@reach/router";
import { motion, AnimatePresence } from "framer-motion";
import { IntlProvider } from "react-intl";
import { Language, Links } from "utils/constants";
import en from "i18n/en.json";
import ja from "i18n/ja.json";
import zh from "i18n/zh.json";
import { TopNavigation } from "components/molecules/TopNavigation";
import styles from "./applayout.module.scss";
import { PageTab } from "components/molecules/PageTab";
import { CdType, MembersType } from "types/responseTypes";

const messages = { en, ja, zh };

const layoutVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

interface AppLayoutProps {
  children: React.ReactNode;
  pageContext: {
    locale: Language;
    currentTab?: CdType | MembersType;
  };
}

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

  const locale = pageContext ? pageContext.locale : Language.Ja;

  const isCdsPage = React.useMemo(() => pathName.includes("/cds/"), [pathName]);
  const isMembersPage = React.useMemo(
    () => pathName.includes("/members-list/"),
    [pathName]
  );

  const cdsPageTabs = React.useMemo(() => {
    const items = [
      {
        link: Links.Singles,
        page: CdType.Singles,
      },
      {
        link: Links.Albums,
        page: CdType.Albums,
      },
    ];

    const selectedItem =
      pageContext && pageContext.currentTab
        ? pageContext.currentTab
        : CdType.Singles;

    return <PageTab items={items} selectedItem={selectedItem} />;
  }, [pageContext]);

  const membersPageTabs = React.useMemo(() => {
    const items = [
      {
        link: Links.FirstGeneration,
        page: MembersType.FirstGeneration,
      },
      {
        link: Links.SecondGeneration,
        page: MembersType.SecondGeneration,
      },
      {
        link: Links.ThirdGeneration,
        page: MembersType.ThirdGeneration,
      },
      {
        link: Links.FourthGeneration,
        page: MembersType.FourthGeneration,
      },
      {
        link: Links.Graduated,
        page: MembersType.Graduated,
      },
    ];

    const selectedItem =
      pageContext && pageContext.currentTab
        ? pageContext.currentTab
        : MembersType.FirstGeneration;

    return <PageTab items={items} selectedItem={selectedItem} />;
  }, [pageContext]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Nogizaka Lib Redesign" />
        <meta property="og:image" content="favicon-512.png" />
        <title>Nogizaka Lib</title>
        <html lang={locale} />
      </Helmet>
      <AnimatePresence>
        <div className={styles.container}>
          <TopNavigation
            locale={locale}
            location={location as WindowLocation}
          />
          {isCdsPage ? cdsPageTabs : null}
          {isMembersPage ? membersPageTabs : null}
          <motion.main
            key={pathName}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={layoutVariants}
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
