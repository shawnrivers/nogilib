import { forwardRef } from 'react';
import { buttonStyles } from 'client/components/v6/shared/buttons/base/styles/buttonStyles';

type BaseAnchorProps = React.ComponentProps<'a'> & {
  children?: React.ReactNode;
};

export const BaseAnchor = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const { children, ...buttonProps } = props;

    return (
      <a css={buttonStyles} {...buttonProps} ref={ref}>
        {children}
      </a>
    );
  }
);
