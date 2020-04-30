import * as React from "react";
import styles from "./pagecontentlayout.module.scss";
import { classNames } from "utils/strings";

interface LayoutProps {
  children: React.ReactNode;
  type?: "top" | "bottom" | "sidesOnly" | "full";
  className?: string;
}

export const PageContentLayout = ({
  children,
  className,
  type,
}: LayoutProps) => {
  const containerClass = React.useMemo(() => {
    switch (type) {
      case "top":
        return styles.top;
      case "bottom":
        return styles.bottom;
      case "sidesOnly":
        return styles.sidesOnly;
      case "full":
        return styles.full;
      default:
        return styles.full;
    }
  }, [type]);

  return (
    <div className={classNames(containerClass, className)}>{children}</div>
  );
};
