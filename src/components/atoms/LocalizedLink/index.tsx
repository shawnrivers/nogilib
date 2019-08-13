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
}

export const LocalizedLink = injectIntl(
  ({ to, children, intl: { locale }, className }: LocalizedLinkProps) => {
    const path = locales[locale as Language].default ? to : `/${locale}${to}`;

    return (
      <Link to={path} className={className}>
        {children}
      </Link>
    );
  }
);
