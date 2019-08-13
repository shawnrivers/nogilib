import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { Transition } from "react-spring/renderprops";
import { IntlProvider } from "react-intl";
import { Language } from "utils/constants";
import en from "i18n/en.json";
import ja from "i18n/ja.json";
import zh from "i18n/zh.json";
import { TopNavigation } from "components/molecules/TopNavigation";

const messages = { en, ja, zh };

interface AppLayoutProps {
  children: React.ReactNode;
  pageContext: {
    locale: Language;
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

  const locale = pageContext ? pageContext.locale : Language.En;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <TopNavigation locale={locale} location={location} />
      <Transition
        items={null}
        key={pathName}
        from={{ opacity: 0, transform: "translateY(100px)" }}
        enter={{ opacity: 1, transform: "translateY(0)" }}
        leave={{ opacity: 0 }}
      >
        {() => style => (
          <main role="main" style={style}>
            {children}
          </main>
        )}
      </Transition>
    </IntlProvider>
  );
};

export default AppLayout;
