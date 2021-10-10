import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, useMemo } from 'react';
import {
  getLinkStyles,
  GetLinkStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/link';

export type BaseLinkProps = Omit<React.ComponentProps<'a'>, 'href'> &
  Partial<GetLinkStylesParams> & {
    as?: LinkProps['as'];
    href: LinkProps['href'];
    locale?: LinkProps['locale'];
    disabled?: boolean;
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
      active,
      hideBorder,
      hideBackgroundTransition,
      children,
      ...buttonProps
    } = props;

    const styles = useMemo(
      () =>
        getLinkStyles({
          disabled,
          active,
          hideBorder,
          hideBackgroundTransition,
        }),
      [disabled, active, hideBorder, hideBackgroundTransition]
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
