/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { SpacingKey } from 'client/styles/tokens/spacing';
import {
  ThemeColorKey,
  ThemeColorsBackground,
} from 'client/styles/tokens/colors';
import { commonStyles, useAppTheme } from 'client/styles/tokens';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundType?: keyof ThemeColorsBackground;
  backgroundColorVariant?: ThemeColorKey;
  horizontalPadding?: SpacingKey;
  verticalPadding?: SpacingKey;
};

export const BaseButton: React.FC<BaseButtonProps> = props => {
  const {
    backgroundType = 'background',
    horizontalPadding = 'xxs',
    verticalPadding = 'xxs',
    backgroundColorVariant = 'variant0',
    children,
    ...buttonProps
  } = props;

  const theme = useAppTheme();

  return (
    <button
      css={css`
        padding: ${commonStyles.spacing[verticalPadding]}
          ${commonStyles.spacing[horizontalPadding]};
        border-radius: ${commonStyles.borderRadius.xs};
        transition: background-color 0.3s ease-out;
        background: none;

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
      `}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
