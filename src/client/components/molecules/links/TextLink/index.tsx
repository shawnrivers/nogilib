import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { mapForegroundToBackground } from 'client/styles/colors';
import {
  BaseLink,
  BaseLinkProps,
} from 'client/components/atoms/links/BaseLink';

type TextLinkProps = BaseLinkProps &
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
      backgroundType={mapForegroundToBackground(textColor.on)}
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
