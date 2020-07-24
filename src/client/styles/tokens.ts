import { useTheme as emotionUseTheme } from 'emotion-theming';
import {
  ColorTheme,
  DARK_COLOR_THEME,
  LIGHT_COLOR_THEME,
  ThemeKey,
} from './colors';
import { TYPOGRAPHY } from 'client/styles/typography';
import { SPACING } from 'client/styles/spacing';
import { BORDER_RADIUS } from 'client/styles/borderRadius';
import { ELEVATION_DARK, ELEVATION_LIGHT } from 'client/styles/elevation';

export type Theme = {
  key: ThemeKey;
  colors: ColorTheme;
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
  elevation: typeof ELEVATION_DARK;
};

const commonStyles: Omit<Theme, 'key' | 'colors' | 'elevation'> = {
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
};

const lightTheme: Theme = {
  key: 'light',
  colors: LIGHT_COLOR_THEME,
  elevation: ELEVATION_LIGHT,
  ...commonStyles,
};

const darkTheme: Theme = {
  key: 'dark',
  colors: DARK_COLOR_THEME,
  elevation: ELEVATION_DARK,
  ...commonStyles,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useTheme = () => emotionUseTheme<Theme>();
