/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { useAppTheme } from 'client/styles/tokens';
import {
  mapForegroundToBackground,
  ThemeColorsForeground,
} from 'client/styles/colors';

export type TextSwitchButtonProps = Omit<
  TypographyProps,
  'element' | 'textColor'
> & {
  isSwitchedOn: boolean;
  textOn?: keyof ThemeColorsForeground;
};

export const TextSwitchButton: React.FC<TextSwitchButtonProps> = props => {
  const {
    variant,
    textOn = 'onBackground',
    isSwitchedOn,
    children,
    onClick,
    ...restProps
  } = props;

  const theme = useAppTheme();
  const backgroundColorKey = mapForegroundToBackground(textOn);

  return (
    <button
      disabled={isSwitchedOn}
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

        &:disabled {
          pointer-events: none;
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
    </button>
  );
};
