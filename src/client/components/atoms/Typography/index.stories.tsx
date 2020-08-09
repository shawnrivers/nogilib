/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Typography } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { useAppContext } from 'client/hooks/useAppContext';
import { useAppTheme } from 'client/styles/tokens';

export default {
  title: 'Typography',
  decorators: [ThemeDecorator(), withKnobs],
};

export const All: React.FC = () => {
  const { setThemeKey } = useAppContext();

  const selectThemeKey = select(
    'Theme',
    {
      Dark: 'dark',
      Light: 'light',
    },
    'dark'
  );

  React.useEffect(() => setThemeKey(selectThemeKey), [
    selectThemeKey,
    setThemeKey,
  ]);
  const theme = useAppTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};

        & > * {
          margin: 24px 24px 48px;
          width: 300px;
        }
      `}
    >
      <div
        css={css`
          & > * {
            margin-bottom: 12px;
          }
        `}
      >
        <Typography variant="h3">English</Typography>
        <hr />
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="body3">Body 3</Typography>
        <Typography variant="caption">Caption</Typography>
        <Typography variant="button">Button</Typography>
      </div>
      <div
        css={css`
          & > * {
            margin-bottom: 12px;
          }
        `}
      >
        <Typography variant="h3">日本語</Typography>
        <hr />
        <Typography variant="h1">見出し 1</Typography>
        <Typography variant="h2">見出し 2</Typography>
        <Typography variant="h3">見出し 3</Typography>
        <Typography variant="h4">見出し 4</Typography>
        <Typography variant="h5">見出し 5</Typography>
        <Typography variant="h6">見出し 6</Typography>
        <Typography variant="body1">本文 1</Typography>
        <Typography variant="body2">本文 2</Typography>
        <Typography variant="body3">本文 3</Typography>
        <Typography variant="caption">キャプション</Typography>
        <Typography variant="button">ボタン</Typography>
      </div>
      <div
        css={css`
          & > * {
            margin-bottom: 12px;
          }
        `}
      >
        <Typography variant="h3">简体中文</Typography>
        <hr />
        <Typography variant="h1">标题 1</Typography>
        <Typography variant="h2">标题 2</Typography>
        <Typography variant="h3">标题 3</Typography>
        <Typography variant="h4">标题 4</Typography>
        <Typography variant="h5">标题 5</Typography>
        <Typography variant="h6">标题 6</Typography>
        <Typography variant="body1">正文 1</Typography>
        <Typography variant="body2">正文 2</Typography>
        <Typography variant="body3">正文 3</Typography>
        <Typography variant="caption">脚注</Typography>
        <Typography variant="button">按键</Typography>
      </div>
    </div>
  );
};
