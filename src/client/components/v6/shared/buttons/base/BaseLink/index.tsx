import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, useMemo } from 'react';
import {
  getLinkStyles,
  GetLinkStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/link';

export type BaseLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  as?: LinkProps['as'];
  href: LinkProps['href'];
  locale?: LinkProps['locale'];
  disabled?: boolean;
  hideBorder?: GetLinkStylesParams['hideBorder'];
  children?: React.ReactNode;
};

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  (props, ref) => {
    const router = useRouter();
    const {
      as,
      href,
      locale = router.locale,
      disabled,
      hideBorder,
      children,
      ...buttonProps
    } = props;

    const styles = useMemo(
      () => getLinkStyles({ disabled, hideBorder }),
      [disabled, hideBorder]
    );

    return (
      <Link href={href} as={as} locale={locale} passHref>
        <a aria-disabled={disabled} css={styles} {...buttonProps} ref={ref}>
          {children}
        </a>
      </Link>
    );
  }
);
