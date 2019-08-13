import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { Transition } from "react-spring/renderprops";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({
  children,
  location,
}: RouteComponentProps<PageLayoutProps>) => {
  const pathName = React.useMemo(() => {
    if (location) {
      const { pathname } = location;
      return pathname[pathname.length - 1] === "/"
        ? pathname.slice(0, -1)
        : pathname;
    }
    return "";
  }, [location]);

  return (
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
  );
};

export default PageLayout;
