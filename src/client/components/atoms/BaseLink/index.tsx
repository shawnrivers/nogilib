import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { isAbsoluteUrl } from 'client/utils/urls';

type AnchorBaseProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>;
type WithChildrenProps = {
  children?: React.ReactNode;
};
type NextLinkProps = {
  as?: LinkProps['as'];
  href?: LinkProps['href'];
  locale?: LinkProps['locale'];
} & AnchorBaseProps &
  WithChildrenProps;
type AnchorLinkProps = {
  href?: string;
} & AnchorBaseProps &
  WithChildrenProps;

export type BaseLinkProps = NextLinkProps | AnchorLinkProps;
export type BaseLinkRef = HTMLAnchorElement;

function isNextLinkProps(props: BaseLinkProps): props is NextLinkProps {
  if ('href' in props) {
    if (typeof props.href === 'string' && !isAbsoluteUrl(props.href)) {
      return true;
    }

    if (typeof props.href !== 'string') {
      return true;
    }
  }

  return false;
}
function isAnchorLinkProps(props: BaseLinkProps): props is AnchorLinkProps {
  if (
    'href' in props &&
    typeof props.href === 'string' &&
    isAbsoluteUrl(props.href)
  ) {
    return true;
  }

  return false;
}

export const BaseLink = React.forwardRef<BaseLinkRef, BaseLinkProps>(
  (props, ref) => {
    const router = useRouter();

    if (isAnchorLinkProps(props)) {
      const { children, ...anchorProps } = props;
      return (
        <a {...anchorProps} ref={ref}>
          {children}
        </a>
      );
    }

    if (isNextLinkProps(props) && props.href) {
      const {
        href,
        as,
        locale = router.locale,
        children,
        ...anchorProps
      } = props;

      return (
        <Link href={href} as={as} locale={locale}>
          <a {...anchorProps} ref={ref as any}>
            {children}
          </a>
        </Link>
      );
    }

    return null;
  }
);
