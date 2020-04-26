import * as React from "react";
import { Link } from "gatsby";
import { injectIntl } from "react-intl";
import locales from "client/i18n/locales";
import { Language } from "client/utils/constants";
import { getUrlWithTrailingSlash } from "client/utils/strings";

interface LocalizedLinkProps {
  to: string;
  intl: any;
  children?: React.ReactNode;
  className?: string;
  label?: string;
  handleClick?(): void;
}

export const LocalizedLink = injectIntl(
  ({
    to,
    children,
    intl: { locale },
    className,
    label,
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
              to: getUrlWithTrailingSlash(path),
              className,
              onClick: handleClick,
            }
          : {
              to: getUrlWithTrailingSlash(path),
              className,
            },
      [path, className, handleClick]
    );

    return (
      <Link {...linkProps} aria-label={label}>
        {children}
      </Link>
    );
  }
);
