import { css } from '@emotion/core';
import {
  getSharedStyles,
  GetSharedStylesParams,
} from 'client/components/v6/shared/buttons/base/styles/shared';

export function getLinkStyles(params?: Partial<GetSharedStylesParams>) {
  const sharedStyles = getSharedStyles(params);

  return css`
    ${sharedStyles};
    border-bottom-width: 2px;
  `;
}
