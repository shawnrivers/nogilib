import { forwardRef } from 'react';
import { linkStyles } from 'client/components/v6/shared/buttons/base/styles/link';

type BaseAnchorProps = React.ComponentProps<'a'> & {
  children?: React.ReactNode;
};

export const BaseAnchor = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const { children, ...buttonProps } = props;

    return (
      <a css={linkStyles} {...buttonProps} ref={ref}>
        {children}
      </a>
    );
  }
);
