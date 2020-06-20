import { useTheme as emotionUseTheme } from 'emotion-theming';
import { GLOBAL_COLORS } from './colors';
import { TYPOGRAPHY } from 'client/styles/typography';
import { SPACING } from 'client/styles/spacing';

export type ThemeColors = {
  primary: {
    standard: string;
    variant0: string;
    variant1: string;
    variant2: string;
    inverse: string;
  };
  secondary: {
    standard: string;
    variant0: string;
  };
  background: {
    standard: string;
    variant0: string;
    inverse: string;
  };
};

export type BackgroundColor = keyof ThemeColors['background'];

export type ThemeKey = 'light' | 'dark';

export type Theme = {
  colors: {
    theme: ThemeColors;
    global: typeof GLOBAL_COLORS;
  };
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  key: ThemeKey;
};

const {
  gray0,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  white,
  red0,
  red1,
} = GLOBAL_COLORS;

const commonStyles: Pick<Theme, 'typography' | 'spacing'> = {
  typography: TYPOGRAPHY,
  spacing: SPACING,
};

const lightTheme: Theme = {
  key: 'light',
  colors: {
    theme: {
      primary: {
        standard: gray0,
        variant0: gray1,
        variant1: gray2,
        variant2: gray3,
        inverse: white,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: white,
        variant0: gray5,
        inverse: gray0,
      },
    },
    global: GLOBAL_COLORS,
  },
  ...commonStyles,
};

const darkTheme: Theme = {
  key: 'dark',
  colors: {
    theme: {
      primary: {
        standard: white,
        variant0: gray5,
        variant1: gray4,
        variant2: gray2,
        inverse: gray0,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: gray0,
        variant0: gray1,
        inverse: white,
      },
    },
    global: GLOBAL_COLORS,
  },
  ...commonStyles,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useTheme = () => emotionUseTheme<Theme>();
