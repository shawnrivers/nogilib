import * as React from "react";
import locales from "i18n/locales";
import { Link } from "gatsby";
import { injectIntl } from "react-intl";
import { Language } from "utils/constants";

interface LocalizedLinkProps {
  to: string;
  intl: any;
  children?: React.ReactNode;
  className?: string;
  handleClick?(): void;
}

export const LocalizedLink = injectIntl(
  ({
    to,
    children,
    intl: { locale },
    className,
    handleClick,
  }: LocalizedLinkProps) => {
    const path = React.useMemo(
      () => (locales[locale as Language].default ? to : `/${locale}${to}`),
      [locale, to]
    );

    const linkProps = React.useMemo(
      () =>
        handleClick
          ? {
              to: path,
              className,
              onClick: handleClick,
            }
          : {
              to: path,
              className,
            },
      [path, className, handleClick]
    );

    return <Link {...linkProps}>{children}</Link>;
  }
);
