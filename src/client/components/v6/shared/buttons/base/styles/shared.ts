import { css } from '@emotion/core';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';

export const sharedStyles = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
  background: none;
  border: 0 solid var(${getColorVarName('onBackground', 'variant0')});

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background-color: var(${getColorVarName('primary', 'standard')});
    opacity: 0.25;
    transform: translateX(-102%);
    transition: transform 0.3s cubic-bezier(0, 0.5, 0.7, 1);
  }

  &.focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:active::before,
  &.focus-visible::before {
    transform: translateX(0);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::before {
      transform: translateX(0);
    }
  }
`;
