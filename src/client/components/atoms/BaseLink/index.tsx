import { Link } from 'gatsby';
import * as React from 'react';
import { isAbsoluteUrl } from 'client/utils/urls';

export type BaseLinkProps = {
  to: string;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type BaseLinkRef = HTMLAnchorElement;

export const BaseLink = React.forwardRef<BaseLinkRef, BaseLinkProps>(
  (props, ref) => {
    const {
      to,
      disabled,
      className,
      onClick,
      children,
      ...anchorProps
    } = props;

    const isAbsoluteLink = isAbsoluteUrl(to);

    return disabled ? (
      <div className={className}>{children}</div>
    ) : isAbsoluteLink ? (
      <a
        href={to}
        className={className}
        onClick={onClick}
        {...anchorProps}
        ref={ref}
      >
        {children}
      </a>
    ) : (
      <Link
        to={to}
        className={className}
        onClick={onClick}
        {...anchorProps}
        ref={ref as any}
      >
        {children}
      </Link>
    );
  }
);
