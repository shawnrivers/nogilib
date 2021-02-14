/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import {
  BaseLink,
  BaseLinkProps,
  BaseLinkRef,
} from 'client/components/atoms/BaseLink';
import { useAppTheme, commonStyles } from 'client/styles/tokens';
import {
  mapBackgroundToForeground,
  ThemeColorKey,
  ThemeColorsBackground,
} from 'client/styles/tokens/colors';

const baseStyles = css`
  display: inline-block;
  padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
  border-radius: ${commonStyles.borderRadius.xs};
  background: none;
`;

export type TextLinkProps = BaseLinkProps &
  Omit<TypographyProps, 'variant' | 'element'> & {
    typographyVariant?: TypographyProps['variant'];
    showUnderline?: boolean;
    underlineColorVariant?: ThemeColorKey;
    backgroundType?: keyof ThemeColorsBackground;
    backgroundColorVariant?: ThemeColorKey;
    disabled?: boolean;
  };

export type TextLinkRef = BaseLinkRef;

export const TextLink = React.forwardRef<TextLinkRef, TextLinkProps>(
  (props, ref) => {
    const {
      typographyVariant = 'body1',
      showUnderline = true,
      underlineColorVariant = 'variant0',
      backgroundType = 'background',
      backgroundColorVariant = 'variant0',
      disabled = false,
      bold,
      fontFamily,
      ellipsis,
      capitalize,
      textColor = { on: 'onBackground', variant: 'standard' },
      children,
      ...linkProps
    } = props;

    const theme = useAppTheme();

    const styles = React.useMemo(
      () =>
        disabled
          ? baseStyles
          : css`
              ${baseStyles};
              transition: background-color 0.3s ease-out;
              text-decoration: ${showUnderline ? 'underline' : 'none'};
              text-underline-position: under;
              text-decoration-color: ${theme.colors.theme[
                mapBackgroundToForeground(backgroundType)
              ][underlineColorVariant]};

              @media (hover: hover) and (pointer: fine) {
                &:hover {
                  background-color: ${theme.colors.theme[backgroundType][
                    backgroundColorVariant
                  ]};
                }
              }
            `,
      [
        disabled,
        backgroundColorVariant,
        backgroundType,
        showUnderline,
        theme.colors.theme,
        underlineColorVariant,
      ]
    );

    return (
      <BaseLink {...linkProps} ref={ref}>
        <Typography
          variant={typographyVariant}
          element="span"
          bold={bold}
          fontFamily={fontFamily}
          ellipsis={ellipsis}
          capitalize={capitalize}
          textColor={textColor}
          css={styles}
        >
          {children}
        </Typography>
      </BaseLink>
    );
  }
);
