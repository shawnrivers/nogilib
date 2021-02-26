/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ThemeDecorator = () => {
  return (Story: any) => {
    return (
      <div
        css={css`
          padding: 24px;
        `}
      >
        <Story />
      </div>
    );
  };
};
