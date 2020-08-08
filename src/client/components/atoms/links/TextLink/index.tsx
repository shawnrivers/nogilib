/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Link } from 'gatsby';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { mapForegroundToBackground } from 'client/styles/colors';

type TextLinkProps = Omit<TypographyProps, 'variant' | 'element'> & {
  to: string;
  element: 'a' | 'Link';
  variant?: TypographyProps['variant'];
};

export const TextLink: React.FC<TextLinkProps> = props => {
  const {
    element,
    to,
    children,
    variant = 'body1',
    textColor = { on: 'onBackground', variant: 'standard' },
    ...typographyProps
  } = props;

  const theme = useAppTheme();

  if (element === 'a') {
    return (
      <a
        href={to}
        css={css`
          display: inherit;
          padding: ${commonStyles.spacing.xs} ${commonStyles.spacing.s};
          border-radius: ${commonStyles.borderRadius.s};
          transition: background-color 0.3s ease-out;
          text-decoration: underline;
          text-underline-position: under;
          text-decoration-color: ${theme.colors.theme[textColor.on][
            textColor.variant
          ]};

          &:hover {
            background-color: ${theme.colors.theme[
              mapForegroundToBackground(textColor.on)
            ].variant0};
          }

          &:focus {
            outline: auto;
          }
        `}
      >
        <Typography
          variant={variant}
          textColor={textColor}
          {...typographyProps}
        >
          {children}
        </Typography>
      </a>
    );
  } else {
    return (
      <Link
        to={to}
        css={css`
          display: inherit;
          padding: ${commonStyles.spacing.xs} ${commonStyles.spacing.s};
          border-radius: ${commonStyles.borderRadius.s};
          transition: background-color 0.3s ease-out;
          text-decoration: underline;
          text-underline-position: under;

          &:hover {
            background-color: ${theme.colors.theme[
              mapForegroundToBackground(textColor.on)
            ].variant0};
          }

          &:focus {
            outline: auto;
          }
        `}
      >
        <Typography
          variant={variant}
          textColor={textColor}
          {...typographyProps}
        >
          {children}
        </Typography>
      </Link>
    );
  }
};
