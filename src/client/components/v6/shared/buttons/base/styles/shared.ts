import { css } from '@emotion/core';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';

function getBackgroundTransitionStyles(disabled: boolean) {
  return css`
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

    &:active::before,
    &.focus-visible::before {
      transform: translateX(${disabled ? '-102%' : '0'});
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        transform: translateX(${disabled ? '-102%' : '0'});
      }
    }
  `;
}

export type GetSharedStylesParams = {
  disabled: boolean;
  hideBackgroundTransition: boolean;
};

export function getSharedStyles(params?: Partial<GetSharedStylesParams>) {
  const disabled = params?.disabled ?? false;
  const hideBackgroundTransition = params?.hideBackgroundTransition ?? false;

  return css`
    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
    background: none;
    border: 0 solid var(${getColorVarName('onBackground', 'variant0')});
    cursor: ${disabled ? 'default' : 'pointer'};
    ${!hideBackgroundTransition && getBackgroundTransitionStyles(disabled)}
  `;
}
