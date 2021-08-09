import { css } from '@emotion/core';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';

export const buttonStyles = css`
  display: inline-block;
  padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
  background: none;
  border: 2px solid rgba(0, 0, 0, 0);
  transition: border-color 0.3s ease-out;

  &.focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:active,
  &.focus-visible {
    border-color: var(${getColorVarName('onBackground', 'variant0')});
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(${getColorVarName('onBackground', 'variant0')});
    }
  }
`;
