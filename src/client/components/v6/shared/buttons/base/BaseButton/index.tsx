import { forwardRef, useMemo } from 'react';
import { getButtonStyles } from 'client/components/v6/shared/buttons/base/styles/button';

type BaseButtonProps = React.ComponentProps<'button'> & {
  children?: React.ReactNode;
};

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { children, disabled, ...buttonProps } = props;

    const styles = useMemo(() => getButtonStyles({ disabled }), [disabled]);

    return (
      <button disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </button>
    );
  }
);
