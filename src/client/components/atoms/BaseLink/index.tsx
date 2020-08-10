/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import {
  mapBackgroundToForeground,
  ThemeColorKey,
  ThemeColorsBackground,
} from 'client/styles/colors';
import { commonStyles, useAppTheme } from 'client/styles/tokens';

export type BaseLinkProps = {
  element: 'a' | 'Link';
  to: string;
  showUnderline?: boolean;
  underlineColorVariant?: ThemeColorKey;
  backgroundType?: keyof ThemeColorsBackground;
  backgroundColorVariant?: ThemeColorKey;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BaseLink: React.FC<BaseLinkProps> = props => {
  const {
    element,
    to,
    showUnderline = true,
    underlineColorVariant = 'variant0',
    backgroundType = 'background',
    backgroundColorVariant = 'variant0',
    disabled = false,
    onClick,
    children,
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
    () => css`
      ${baseStyles};
      transition: background-color 0.3s ease-out;
      text-decoration: ${showUnderline ? 'underline' : 'none'};
      text-underline-position: under;
      text-decoration-color: ${theme.colors.theme[
        mapBackgroundToForeground(backgroundType)
      ][underlineColorVariant]};

      &:focus {
        outline: auto;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${theme.colors.theme[backgroundType][
            backgroundColorVariant
          ]};
        }
      }
    `,
    [
      baseStyles,
      backgroundColorVariant,
      backgroundType,
      showUnderline,
      theme.colors.theme,
      underlineColorVariant,
    ]
  );

  return disabled ? (
    <div css={baseStyles}>{children}</div>
  ) : element === 'a' ? (
    <a href={to} css={styles} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} css={styles} onClick={onClick}>
      {children}
    </Link>
  );
};
