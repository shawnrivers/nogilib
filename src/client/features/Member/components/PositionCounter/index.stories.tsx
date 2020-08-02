/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { useAppContext } from 'client/hooks/useAppContext';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { PositionCounter } from 'client/features/Member/components/PositionCounter';

export default {
  title: 'Position/counter',
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
    'dark'
  );
  const center = number('Center', 1);
  const fukujin = number('Fukujin', 1);
  const selected = number('Selected', 1);
  const under = number('Under', 1);

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
      <PositionCounter
        center={center}
        fukujin={fukujin + center}
        selected={selected + fukujin + center}
        under={under}
      />
    </div>
  );
};
