import * as React from 'react';
import { TypographyProps } from 'client/components/atoms/Typography';
import { ThemeColorsForeground } from 'client/styles/colors';
import { TextLink } from 'client/components/molecules/links/TextLink';

export type TextSwitchLinkProps = Omit<
  TypographyProps,
  'element' | 'textColor'
> & {
  to: string;
  isSwitchedOn: boolean;
  textOn?: keyof ThemeColorsForeground;
};

export const TextSwitchLink: React.FC<TextSwitchLinkProps> = props => {
  const {
    variant,
    textOn = 'onBackground',
    to,
    isSwitchedOn,
    children,
    onClick,
    ...restProps
  } = props;

  return !isSwitchedOn ? (
    <TextLink
      to={to}
      onClick={onClick}
      element="Link"
      showUnderline={false}
      textColor={{ on: textOn, variant: 'variant1' }}
      typographyVariant={variant}
      {...restProps}
    >
      {children}
    </TextLink>
  ) : (
    <TextLink
      to={to}
      element="Link"
      textColor={{ on: textOn, variant: 'standard' }}
      typographyVariant={variant}
      disabled
      {...restProps}
    >
      {children}
    </TextLink>
  );
};
