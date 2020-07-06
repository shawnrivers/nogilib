import { useTheme as emotionUseTheme } from 'emotion-theming';
import { GLOBAL_COLORS } from './colors';
import { TYPOGRAPHY } from 'client/styles/typography';
import { SPACING } from 'client/styles/spacing';

export type ThemeColorVariants = {
  standard: string;
  variant0: string;
  variant1: string;
};

export type ThemeColorsForeground = {
  onPrimary: ThemeColorVariants;
  onSecondary: ThemeColorVariants;
  onBackground: ThemeColorVariants;
  onSurface: ThemeColorVariants;
};

export type ThemeColorsBackground = {
  primary: ThemeColorVariants;
  secondary: ThemeColorVariants;
  background: ThemeColorVariants;
  surface: ThemeColorVariants;
};

export type ThemeColors = ThemeColorsBackground & ThemeColorsForeground;

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
  gray1,
  gray3,
  gray4,
  gray6,
  gray8,
  white,
  purpleDull0,
  purpleDull1,
  purpleDull2,
  purpleDull3,
  purpleDull4,
  yellow0,
  yellow1,
  yellow2,
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
        standard: purpleDull0,
        variant0: purpleDull1,
        variant1: purpleDull2,
      },
      secondary: {
        standard: yellow0,
        variant0: yellow1,
        variant1: yellow2,
      },
      background: {
        standard: white,
        variant0: gray1,
        variant1: gray3,
      },
      surface: {
        standard: white,
        variant0: gray1,
        variant1: gray3,
      },
      onPrimary: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      onSecondary: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      onBackground: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      onSurface: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
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
        standard: purpleDull4,
        variant0: purpleDull3,
        variant1: purpleDull2,
      },
      secondary: {
        standard: yellow0,
        variant0: yellow1,
        variant1: yellow2,
      },
      background: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      surface: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      onPrimary: {
        standard: white,
        variant0: gray1,
        variant1: gray3,
      },
      onSecondary: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
      },
      onBackground: {
        standard: white,
        variant0: gray1,
        variant1: gray3,
      },
      onSurface: {
        standard: gray8,
        variant0: gray6,
        variant1: gray4,
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
