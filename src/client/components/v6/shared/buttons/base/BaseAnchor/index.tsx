import { forwardRef, useMemo } from 'react';
import {
  getLinkStyles,
  GetLinkStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/link';

export type BaseAnchorProps = React.ComponentProps<'a'> & {
  disabled?: boolean;
  hideBorder?: GetLinkStylesParams['hideBorder'];
  children?: React.ReactNode;
};

export const BaseAnchor = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const { disabled, hideBorder, children, ...buttonProps } = props;

    const styles = useMemo(
      () => getLinkStyles({ disabled, hideBorder }),
      [disabled, hideBorder]
    );

    return (
      <a aria-disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </a>
    );
  }
);
