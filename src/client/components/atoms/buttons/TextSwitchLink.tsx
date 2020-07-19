/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Link } from 'gatsby';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { useTheme } from 'client/styles/tokens';
import {
  mapForegroundToBackground,
  ThemeColorsForeground,
} from 'client/styles/colors';

type TextSwitchLinkProps = Omit<TypographyProps, 'element' | 'textColor'> & {
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

  const theme = useTheme();
  const backgroundColorKey = mapForegroundToBackground(textOn);

  return !isSwitchedOn ? (
    <Link
      to={to}
      onClick={onClick}
      css={css`
        & > * {
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-color: ${theme.colors.theme[backgroundColorKey]
            .standard};
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          & > * {
            color: ${theme.colors.theme[textOn].standard};
            text-decoration-color: currentColor;
          }
        }
      `}
    >
      <Typography
        variant={variant}
        element="span"
        textColor={{
          on: textOn,
          variant: isSwitchedOn ? 'standard' : 'variant1',
        }}
        {...restProps}
      >
        {children}
      </Typography>
    </Link>
  ) : (
    <Typography
      variant={variant}
      element="span"
      textColor={{
        on: textOn,
        variant: isSwitchedOn ? 'standard' : 'variant1',
      }}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
