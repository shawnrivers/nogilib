import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { BaseLink, BaseLinkProps } from 'client/components/atoms/BaseLink';

export type TextLinkProps = BaseLinkProps &
  Omit<TypographyProps, 'variant' | 'element'> & {
    typographyVariant?: TypographyProps['variant'];
  };

export const TextLink: React.FC<TextLinkProps> = props => {
  const {
    element,
    to,
    typographyVariant = 'body1',
    showUnderline,
    textColor = { on: 'onBackground', variant: 'standard' },
    backgroundType,
    backgroundColorVariant,
    children,
    className,
    disabled,
    onClick,
    ...typographyProps
  } = props;

  return (
    <BaseLink
      element={element}
      to={to}
      showUnderline={showUnderline}
      underlineColorVariant={textColor.variant}
      backgroundType={backgroundType}
      backgroundColorVariant={backgroundColorVariant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography
        variant={typographyVariant}
        textColor={textColor}
        element="span"
        {...typographyProps}
      >
        {children}
      </Typography>
    </BaseLink>
  );
};
