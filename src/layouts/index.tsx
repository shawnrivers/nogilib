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
      from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
      enter={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
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
