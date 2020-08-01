import { useTheme as useEmotionTheme } from 'emotion-theming';
import {
  ColorTheme,
  DARK_COLOR_THEME,
  LIGHT_COLOR_THEME,
  ThemeKey,
} from './colors';
import { TYPOGRAPHY } from 'client/styles/typography';
import { SPACING } from 'client/styles/spacing';
import { BORDER_RADIUS } from 'client/styles/borderRadius';
import {
  Elevation,
  ELEVATION_DARK,
  ELEVATION_LIGHT,
} from 'client/styles/elevation';
import { BREAK_POINTS } from 'client/styles/breakPoints';

export type Theme = {
  key: ThemeKey;
  colors: ColorTheme;
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
  elevation: Elevation;
  breakPoints: typeof BREAK_POINTS;
};

const commonStyles: Omit<Theme, 'key' | 'colors' | 'elevation'> = {
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  breakPoints: BREAK_POINTS,
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

export const useAppTheme = () => useEmotionTheme<Theme>();
