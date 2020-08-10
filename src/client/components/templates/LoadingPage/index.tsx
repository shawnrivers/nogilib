/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { GLOBAL_COLORS } from 'client/styles/colors';
import { GatsbyImage } from 'client/components/atoms/images/GatsbyImage';

export const LoadingPage: React.FC = () => (
  <div
    css={css`
      width: 100vw;
      height: 100vh;
      background-color: ${GLOBAL_COLORS.gray8};
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <GatsbyImage
      src="icon.png"
      alt="loading"
      css={css`
        width: 192px;
        height: 192px;
      `}
    />
  </div>
);
