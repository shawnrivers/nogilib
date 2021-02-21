import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';

export const GLOBAL_COLORS = {
  white: '#FFFFFF',
  gray0: '#E5E5E5',
  gray1: '#CCCCCC',
  gray2: '#B2B2B2',
  gray3: '#999999',
  gray4: '#808080',
  gray5: '#666666',
  gray6: '#4D4D4D',
  gray7: '#333333',
  gray8: '#1A1A1A',
  purple0: '#E2B4EA',
  purple1: '#CB78D9',
  purple2: '#AE37C3',
  purple3: '#812990',
  purple4: '#601F6B',
  purpleDull0: '#F4F0F4',
  purpleDull1: '#DDD3DE',
  purpleDull2: '#B29BB5',
  purpleDull3: '#664F6A',
  purpleDull4: '#4A3E4C',
  red0: '#F4B3C0',
  red1: '#EF90A3',
  red2: '#E54F6D',
  red3: '#BF1C3D',
  red4: '#971630',
  redDull0: '#D8CFD1',
  redDull1: '#C9B6BA',
  redDull2: '#A98B91',
  redDull3: '#7E5D64',
  redDull4: '#644A4F',
  yellow0: '#FBE297',
  yellow1: '#FAD566',
  yellow2: '#F8C630',
  yellow3: '#CA9907',
  yellow4: '#947005',
  yellowDull0: '#D1CDC1',
  yellowDull1: '#BCB6A4',
  yellowDull2: '#A49C84',
  yellowDull3: '#787059',
  yellowDull4: '#585241',
};

export const GLOW_STICK_COLORS: Record<GlowStickColorType, string> = {
  red: '#fb9090',
  yellow: '#f7dd7f',
  white: '#ffffff',
  blue: '#7fbaf7',
  green: '#a3ffaa',
  purple: '#dc9af7',
  black: '#595959',
  pink: '#ff90d4',
  orange: '#ffba75',
  'light blue': '#4bded7',
  'yellow green': '#d2ff87',
  none: '#ffffff',
};

export type GlobalColorKey = keyof typeof GLOBAL_COLORS;
export type ThemeColorKey = 'standard' | 'variant0' | 'variant1';

export type ThemeColorVariants = Record<ThemeColorKey, string>;

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

export const mapForegroundToBackground = (
  foregroundKey: keyof ThemeColorsForeground
): keyof ThemeColorsBackground => {
  switch (foregroundKey) {
    case 'onPrimary':
      return 'primary';
    case 'onSecondary':
      return 'secondary';
    case 'onBackground':
      return 'background';
    case 'onSurface':
      return 'surface';
  }
};

export const mapBackgroundToForeground = (
  backgroundKey: keyof ThemeColorsBackground
): keyof ThemeColorsForeground => {
  switch (backgroundKey) {
    case 'primary':
      return 'onPrimary';
    case 'secondary':
      return 'onSecondary';
    case 'background':
      return 'onBackground';
    case 'surface':
      return 'onSurface';
  }
};

export function getColorVarName(
  type: keyof ThemeColorsBackground | keyof ThemeColorsForeground,
  variant: keyof ThemeColorVariants
): string {
  return `--color-${type}-${variant}`;
}

export type ColorTheme = {
  theme: ThemeColors;
  global: typeof GLOBAL_COLORS;
  glowStick: typeof GLOW_STICK_COLORS;
};

export const LIGHT_COLOR_THEME: ColorTheme = {
  theme: {
    primary: {
      standard: GLOBAL_COLORS.purple1,
      variant0: GLOBAL_COLORS.purple2,
      variant1: GLOBAL_COLORS.purple3,
    },
    secondary: {
      standard: GLOBAL_COLORS.yellow0,
      variant0: GLOBAL_COLORS.yellow1,
      variant1: GLOBAL_COLORS.yellow2,
    },
    background: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
    surface: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
    onPrimary: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
    onSecondary: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray6,
      variant1: GLOBAL_COLORS.gray4,
    },
    onBackground: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray5,
      variant1: GLOBAL_COLORS.gray3,
    },
    onSurface: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray5,
      variant1: GLOBAL_COLORS.gray3,
    },
  },
  global: GLOBAL_COLORS,
  glowStick: GLOW_STICK_COLORS,
};

export const DARK_COLOR_THEME: ColorTheme = {
  theme: {
    primary: {
      standard: GLOBAL_COLORS.purple1,
      variant0: GLOBAL_COLORS.purple2,
      variant1: GLOBAL_COLORS.purple3,
    },
    secondary: {
      standard: GLOBAL_COLORS.yellow0,
      variant0: GLOBAL_COLORS.yellow1,
      variant1: GLOBAL_COLORS.yellow2,
    },
    background: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray6,
      variant1: GLOBAL_COLORS.gray4,
    },
    surface: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray6,
      variant1: GLOBAL_COLORS.gray4,
    },
    onPrimary: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
    onSecondary: {
      standard: GLOBAL_COLORS.gray8,
      variant0: GLOBAL_COLORS.gray6,
      variant1: GLOBAL_COLORS.gray4,
    },
    onBackground: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
    onSurface: {
      standard: GLOBAL_COLORS.white,
      variant0: GLOBAL_COLORS.gray1,
      variant1: GLOBAL_COLORS.gray3,
    },
  },
  global: GLOBAL_COLORS,
  glowStick: GLOW_STICK_COLORS,
};
