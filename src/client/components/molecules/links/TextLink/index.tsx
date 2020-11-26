/**@jsx jsx */
import { jsx, css } from '@emotion/core';
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

export type TextLinkProps = BaseLinkProps &
  Omit<TypographyProps, 'variant' | 'element'> & {
    typographyVariant?: TypographyProps['variant'];
    showUnderline?: boolean;
    underlineColorVariant?: ThemeColorKey;
    backgroundType?: keyof ThemeColorsBackground;
    backgroundColorVariant?: ThemeColorKey;
  };

export type TextLinkRef = BaseLinkRef;

export const TextLink = React.forwardRef<TextLinkRef, TextLinkProps>(
  (props, ref) => {
    const {
      to,
      typographyVariant = 'body1',
      showUnderline = true,
      textColor = { on: 'onBackground', variant: 'standard' },
      backgroundType = 'background',
      backgroundColorVariant = 'variant0',
      underlineColorVariant = 'variant0',
      children,
      disabled = false,
      tabIndex,
      onClick,
      ...typographyProps
    } = props;

    const theme = useAppTheme();

    const baseStyles = React.useMemo(
      () => css`
        display: inline-block;
        padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
        border-radius: ${commonStyles.borderRadius.xs};
        background: none;
      `,
      []
    );

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
        baseStyles,
        backgroundColorVariant,
        backgroundType,
        showUnderline,
        theme.colors.theme,
        underlineColorVariant,
      ]
    );

    return (
      <BaseLink
        to={to}
        onClick={onClick}
        disabled={disabled}
        css={styles}
        tabIndex={tabIndex}
        ref={ref}
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
  }
);
