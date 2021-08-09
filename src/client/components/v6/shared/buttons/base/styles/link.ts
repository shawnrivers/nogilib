import { css } from '@emotion/core';
import {
  getSharedStyles,
  GetSharedStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/shared';

export type GetLinkStylesParams = GetSharedStylesParams & {
  hideBorder: boolean;
};

export function getLinkStyles(params: Partial<GetLinkStylesParams>) {
  const { hideBorder = false, ...sharedParams } = params;
  const sharedStyles = getSharedStyles(sharedParams);

  return css`
    ${sharedStyles};
    vertical-align: bottom;
    border-bottom-width: ${hideBorder ? '0' : '2px'};
  `;
}
