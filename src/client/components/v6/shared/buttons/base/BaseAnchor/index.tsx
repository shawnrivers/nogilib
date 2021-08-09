import { forwardRef, useMemo } from 'react';
import {
  getLinkStyles,
  GetLinkStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/link';

export type BaseAnchorProps = React.ComponentProps<'a'> &
  Partial<GetLinkStylesParams> & {
    disabled?: boolean;
    children?: React.ReactNode;
  };

export const BaseAnchor = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const {
      disabled,
      hideBorder,
      hideBackgroundTransition,
      children,
      ...buttonProps
    } = props;

    const styles = useMemo(
      () => getLinkStyles({ disabled, hideBorder, hideBackgroundTransition }),
      [disabled, hideBorder, hideBackgroundTransition]
    );

    return (
      <a aria-disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </a>
    );
  }
);
