import { css } from '@emotion/core';
import {
  getSharedStyles,
  GetSharedStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/shared';

export type GetButtonStylesParams = GetSharedStylesParams & {
  hideBorder: boolean;
};

export function getButtonStyles(params: Partial<GetButtonStylesParams>) {
  const { hideBorder = false, ...sharedParams } = params;
  const sharedStyles = getSharedStyles(sharedParams);

  return css`
    ${sharedStyles};
    border-width: ${hideBorder ? '0' : '2px'};
  `;
}
