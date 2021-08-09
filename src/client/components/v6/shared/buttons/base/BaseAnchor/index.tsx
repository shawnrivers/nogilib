import { forwardRef, useMemo } from 'react';
import { getLinkStyles } from 'client/components/v6/shared/buttons/base/styles/link';

type BaseAnchorProps = React.ComponentProps<'a'> & {
  children?: React.ReactNode;
  disabled?: boolean;
};

export const BaseAnchor = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const { children, disabled, ...buttonProps } = props;

    const styles = useMemo(() => getLinkStyles({ disabled }), [disabled]);

    return (
      <a aria-disabled={disabled} css={styles} {...buttonProps} ref={ref}>
        {children}
      </a>
    );
  }
);
