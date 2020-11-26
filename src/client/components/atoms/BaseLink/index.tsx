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
    const { to, disabled, css, onClick, children, ...anchorProps } = props;

    const isAbsoluteLink = isAbsoluteUrl(to);

    return disabled ? (
      <div css={css}>{children}</div>
    ) : isAbsoluteLink ? (
      <a href={to} css={css} onClick={onClick} {...anchorProps} ref={ref}>
        {children}
      </a>
    ) : (
      <Link
        to={to}
        css={css}
        onClick={onClick}
        {...anchorProps}
        ref={ref as any}
      >
        {children}
      </Link>
    );
  }
);
