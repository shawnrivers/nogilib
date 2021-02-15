import * as React from 'react';
import { TypographyProps } from 'client/components/atoms/Typography';
import { ThemeColorsForeground } from 'client/styles/tokens/colors';
import { TextLink } from 'client/components/molecules/links/TextLink';

export type TextSwitchLinkProps = Omit<
  TypographyProps,
  'element' | 'textColor'
> & {
  href: string;
  isSwitchedOn: boolean;
  textOn?: keyof ThemeColorsForeground;
};

export const TextSwitchLink: React.FC<TextSwitchLinkProps> = props => {
  const {
    variant,
    textOn = 'onBackground',
    href,
    isSwitchedOn,
    children,
    onClick,
    ...restProps
  } = props;

  return !isSwitchedOn ? (
    <TextLink
      href={href}
      onClick={onClick}
      showUnderline={false}
      textColor={{ on: textOn, variant: 'variant1' }}
      typographyVariant={variant}
      {...restProps}
    >
      {children}
    </TextLink>
  ) : (
    <TextLink
      href={href}
      textColor={{ on: textOn, variant: 'standard' }}
      typographyVariant={variant}
      disabled
      {...restProps}
    >
      {children}
    </TextLink>
  );
};
