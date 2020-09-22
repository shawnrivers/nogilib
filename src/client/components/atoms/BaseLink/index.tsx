import { Link } from 'gatsby';
import * as React from 'react';
import { isAbsoluteUrl } from 'client/utils/urls';

export type BaseLinkProps = {
  to: string;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BaseLink: React.FC<BaseLinkProps> = props => {
  const { to, disabled, className, onClick, children } = props;

  const isAbsoluteLink = isAbsoluteUrl(to);

  return disabled ? (
    <div css={className}>{children}</div>
  ) : isAbsoluteLink ? (
    <a href={to} css={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} css={className} onClick={onClick}>
      {children}
    </Link>
  );
};
