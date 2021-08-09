import { forwardRef, useMemo } from 'react';
import {
  getButtonStyles,
  GetButtonStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/button';

export type BaseButtonProps = React.ComponentProps<'button'> &
  Partial<GetButtonStylesParams> & {
    children?: React.ReactNode;
  };

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      disabled,
      active,
      hideBorder,
      hideBackgroundTransition,
      children,
      ...buttonProps
    } = props;

    const styles = useMemo(
      () =>
        getButtonStyles({
          disabled,
          active,
          hideBorder,
          hideBackgroundTransition,
        }),
      [disabled, active, hideBorder, hideBackgroundTransition]
    );

    return (
      <button disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </button>
    );
  }
);
