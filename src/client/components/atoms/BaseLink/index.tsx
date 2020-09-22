import { Link } from 'gatsby';
import * as React from 'react';

export type BaseLinkProps = {
  element: 'a' | 'Link';
  to: string;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BaseLink: React.FC<BaseLinkProps> = props => {
  const { element, to, disabled, className, onClick, children } = props;

  return disabled ? (
    <div css={className}>{children}</div>
  ) : element === 'a' ? (
    <a href={to} css={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} css={className} onClick={onClick}>
      {children}
    </Link>
  );
};
