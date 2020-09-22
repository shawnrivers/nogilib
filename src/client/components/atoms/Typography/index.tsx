/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import {
  FontFamily,
  FONT_FAMILY,
  TypographyKey,
} from 'client/styles/typography';
import {
  ThemeColorsForeground,
  ThemeColorVariants,
} from 'client/styles/colors';

const textEllipsisStyles = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const variantMapping: Record<TypographyKey, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  em1: 'p',
  em2: 'p',
  em3: 'p',
  caption: 'p',
  button: 'span',
};

const defaultFontFamilyMapping: Record<TypographyKey, FontFamily> = {
  h1: 'serif',
  h2: 'serif',
  h3: 'serif',
  h4: 'serif',
  h5: 'serif',
  h6: 'serif',
  h7: 'serif',
  body1: 'sans',
  body2: 'sans',
  body3: 'sans',
  body4: 'sans',
  em1: 'sans',
  em2: 'sans',
  em3: 'sans',
  caption: 'sans',
  button: 'sans',
};

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyKey;
  element?: React.ElementType;
  bold?: boolean;
  fontFamily?: FontFamily;
  ellipsis?: boolean;
  capitalize?: boolean;
  textColor?: {
    on: keyof ThemeColorsForeground;
    variant: keyof ThemeColorVariants;
  };
};

export const Typography: React.FC<TypographyProps> = props => {
  const {
    variant,
    element,
    fontFamily,
    ellipsis = false,
    textColor = {
      on: 'onBackground',
      variant: 'standard',
    },
    bold,
    capitalize = false,
    children,
    ...restProps
  } = props;
  const theme = useAppTheme();
  const Element = element ?? variantMapping[variant];
  const fontFamilyValue =
    fontFamily !== undefined
      ? FONT_FAMILY[fontFamily]
      : FONT_FAMILY[defaultFontFamilyMapping[variant]];
  const color = theme.colors.theme[textColor.on][textColor.variant];
  const styles = React.useMemo(() => {
    const stylesResult = [
      theme.typography[variant],
      css`
        color: ${color};
        font-weight: ${bold ? 700 : undefined};
        font-family: ${fontFamilyValue};
        text-transform: ${capitalize ? 'capitalize' : 'initial'};
      `,
    ];
    if (ellipsis) {
      stylesResult.push(textEllipsisStyles);
    }

    return stylesResult;
  }, [
    bold,
    color,
    fontFamilyValue,
    ellipsis,
    theme.typography,
    variant,
    capitalize,
  ]);

  return (
    <Element css={styles} {...restProps}>
      {children}
    </Element>
  );
};
