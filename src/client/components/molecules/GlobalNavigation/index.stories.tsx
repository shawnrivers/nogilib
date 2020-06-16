/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { GlobalNavigation } from 'client/components/molecules/GlobalNavigation';

export default {
  title: 'GlobalNavigation',
  decorators: [ThemeDecorator()],
};

export const All: React.FC = () => {
  return (
    <div
      css={css`
        margin: 24px;
      `}
    >
      <GlobalNavigation />
    </div>
  );
};
