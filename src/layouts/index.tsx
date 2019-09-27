import * as React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";
import { IntlProvider } from "react-intl";
import styles from "./applayout.module.scss";
import { Language, Links } from "utils/constants";
import en from "i18n/en.json";
import ja from "i18n/ja.json";
import zh from "i18n/zh.json";
import { TopNavigation } from "components/molecules/TopNavigation";
import { PageTabs } from "components/molecules/PageTabs";
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

    return {
      items,
      selectedItem,
    };
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

    return {
      items,
      selectedItem,
    };
  }, [pageContext]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="title" content="Nogizaka Lib" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@yuxiao_he" />
        <meta
          name="description"
          content="Nogizaka Lib is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
        />
        <meta
          name="url"
          content="https://shawnrivers.github.io/nogizaka-lib-redesign/"
        />
        <meta name="og:title" content="Nogizaka Lib" />
        <meta
          name="og:description"
          content="Nogizaka Lib is a Gatsby powered web application aiming at showing the information about Nogizaka46 in a user-friendly way."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/design/nogizakalib-preview.jpg"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <title>Nogizaka Lib</title>
        <html lang={locale} />
      </Helmet>
      <AnimatePresence>
        <div className={styles.container}>
          <TopNavigation pathName={pathName} />
          {isCdsPage ? (
            <PageTabs
              items={cdsPageTabs.items}
              selectedItem={cdsPageTabs.selectedItem}
            />
          ) : null}
          {isMembersPage ? (
            <PageTabs
              items={membersPageTabs.items}
              selectedItem={membersPageTabs.selectedItem}
            />
          ) : null}
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
