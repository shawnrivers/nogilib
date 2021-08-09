import { forwardRef, useMemo } from 'react';
import {
  getButtonStyles,
  GetButtonStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/button';

export type BaseButtonProps = React.ComponentProps<'button'> & {
  hideBorder?: GetButtonStylesParams['hideBorder'];
  children?: React.ReactNode;
};

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { hideBorder, disabled, children, ...buttonProps } = props;

    const styles = useMemo(
      () => getButtonStyles({ hideBorder, disabled }),
      [hideBorder, disabled]
    );

    return (
      <button disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </button>
    );
  }
);
