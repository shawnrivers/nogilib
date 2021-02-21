/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import { SpacingKey } from 'client/styles/tokens/spacing';
import {
  getColorVarName,
  ThemeColorKey,
  ThemeColorsBackground,
} from 'client/styles/tokens/colors';
import { commonStyles } from 'client/styles/tokens';

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundType?: keyof ThemeColorsBackground;
  backgroundColorVariant?: ThemeColorKey;
  horizontalPadding?: SpacingKey;
  verticalPadding?: SpacingKey;
};

export type BaseButtonRef = HTMLButtonElement;

export const BaseButton = React.forwardRef<BaseButtonRef, BaseButtonProps>(
  (props, ref) => {
    const {
      backgroundType = 'background',
      horizontalPadding = 'xxs',
      verticalPadding = 'xxs',
      backgroundColorVariant = 'variant0',
      children,
      ...buttonProps
    } = props;

    return (
      <button
        css={css`
          padding: ${commonStyles.spacing[verticalPadding]}
            ${commonStyles.spacing[horizontalPadding]};
          border-radius: ${commonStyles.borderRadius.xs};
          transition: background-color 0.3s ease-out;
          background: none;

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              background-color: var(
                ${getColorVarName(backgroundType, backgroundColorVariant)}
              );
            }
          }
        `}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
