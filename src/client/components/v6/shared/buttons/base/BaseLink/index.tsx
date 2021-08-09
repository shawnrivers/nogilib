import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, useMemo } from 'react';
import { getLinkStyles } from 'client/components/v6/shared/buttons/base/styles/link';

type BaseAnchorProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  as?: LinkProps['as'];
  href: LinkProps['href'];
  locale?: LinkProps['locale'];
  children?: React.ReactNode;
  disabled?: boolean;
};

export const BaseLink = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const router = useRouter();
    const {
      as,
      href,
      locale = router.locale,
      disabled = false,
      children,
      ...buttonProps
    } = props;

    const styles = useMemo(() => getLinkStyles({ disabled }), [disabled]);

    return (
      <Link href={href} as={as} locale={locale} passHref>
        <a aria-disabled={disabled} css={styles} {...buttonProps} ref={ref}>
          {children}
        </a>
      </Link>
    );
  }
);
