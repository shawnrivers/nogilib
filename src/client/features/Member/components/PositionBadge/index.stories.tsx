/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { useAppContext } from 'client/hooks/useAppContext';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { PositionBadge } from 'client/features/Member/components/PositionBadge';
import { PositionType } from 'server/actors/Members/constants/position';

export default {
  title: 'Position/badge',
  decorators: [ThemeDecorator(), withKnobs],
};

export const All: React.FC = () => {
  const { setThemeKey } = useAppContext();

  const themeKey = select(
    'Theme',
    {
      Dark: 'dark',
      Light: 'light',
    },
    'light'
  );

  React.useEffect(() => setThemeKey(themeKey), [themeKey, setThemeKey]);

  return (
    <div
      css={css`
        margin: 24px;
        display: flex;

        & > * {
          margin: 8px;
        }
      `}
    >
      <PositionBadge position={PositionType.Center} />
      <PositionBadge position={PositionType.Fukujin} />
      <PositionBadge position={PositionType.Selected} />
      <PositionBadge position={PositionType.Under} />
    </div>
  );
};
