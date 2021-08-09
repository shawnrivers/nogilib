import { forwardRef } from 'react';
import { buttonStyles } from 'client/components/v6/shared/buttons/base/styles/buttonStyles';

type BaseButtonProps = React.ComponentProps<'button'> & {
  children?: React.ReactNode;
};

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { children, ...buttonProps } = props;

    return (
      <button css={buttonStyles} {...buttonProps} ref={ref}>
        {children}
      </button>
    );
  }
);
