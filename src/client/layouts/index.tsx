import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { motion } from 'framer-motion';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'emotion-theming';
import styles from './applayout.module.scss';
import { TopNavigation } from 'client/components/molecules/TopNavigation';
import { PageTabs } from 'client/components/molecules/PageTabs';
import en from 'client/i18n/en.json';
import ja from 'client/i18n/ja.json';
import zh from 'client/i18n/zh.json';
import { CdTabType, MembersTabType } from 'client/types/tabs';
import 'client/styles/app.scss';
import {
  Language,
  Links,
  LOCAL_STORAGE_THEME_KEY,
} from 'client/utils/constants';
import { ThemeKey, themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/hooks/useDarkModeMediaQuery';
import { ThemeMode } from 'client/types/themeMode';

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
    currentTab?: CdTabType | MembersTabType;
  };
}

const AppLayout = ({
  children,
  location,
  pageContext,
}: RouteComponentProps<AppLayoutProps>) => {
  const themeMode = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeMode;
  const defaultThemeKey = themeMode === 'light' ? 'light' : 'dark';
  const [themeKey, setThemeKey] = React.useState<ThemeKey>(defaultThemeKey);
  const theme = React.useMemo(() => themes[themeKey], [themeKey]);

  // TODO: Use useContext and useReducer to handle re-render after changing the theme key.
  useDarkModeMediaQuery({
    themeMode,
    onDarkMode: () => {
      setThemeKey('dark');
    },
    onLightMode: () => {
      setThemeKey('dark');
    },
  });

  const pathName = React.useMemo(() => {
    if (location) {
      const { pathname } = location;
      return pathname[pathname.length - 1] === '/'
        ? pathname.slice(0, -1)
        : pathname;
    }
    return '';
  }, [location]);

  const locale = pageContext ? pageContext.locale : Language.Ja;

  const isCdsPage = React.useMemo(() => pathName.includes('/cds/'), [pathName]);
  const isMembersPage = React.useMemo(
    () => pathName.includes('/members-list/'),
    [pathName]
  );

  const cdsPageTabs = React.useMemo(() => {
    const items = [
      {
        link: Links.Singles,
        page: CdTabType.Singles,
      },
      {
        link: Links.Albums,
        page: CdTabType.Albums,
      },
    ];

    const selectedItem =
      pageContext && pageContext.currentTab
        ? pageContext.currentTab
        : CdTabType.Singles;

    return {
      items,
      selectedItem,
    };
  }, [pageContext]);

  const membersPageTabs = React.useMemo(() => {
    const items = [
      {
        link: Links.FirstGeneration,
        page: MembersTabType.FirstGeneration,
      },
      {
        link: Links.SecondGeneration,
        page: MembersTabType.SecondGeneration,
      },
      {
        link: Links.ThirdGeneration,
        page: MembersTabType.ThirdGeneration,
      },
      {
        link: Links.FourthGeneration,
        page: MembersTabType.FourthGeneration,
      },
      {
        link: Links.Graduated,
        page: MembersTabType.Graduated,
      },
    ];

    const selectedItem =
      pageContext && pageContext.currentTab
        ? pageContext.currentTab
        : MembersTabType.FirstGeneration;

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
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <title>Nogizaka Lib</title>
        <html lang={locale} />
      </Helmet>
      <ThemeProvider theme={theme}>
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
            variants={layoutVariants}
            className={styles.contents}
          >
            {children}
          </motion.main>
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default AppLayout;
