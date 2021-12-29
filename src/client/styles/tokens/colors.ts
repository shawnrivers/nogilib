import { GlowStickColor } from 'db/src/actors/Members/types';

export type GlobalColorKey =
  | 'white'
  | 'gray0'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'purple0'
  | 'purple1'
  | 'purple2'
  | 'purple3'
  | 'purple4'
  | 'purpleDull0'
  | 'purpleDull1'
  | 'purpleDull2'
  | 'purpleDull3'
  | 'purpleDull4'
  | 'red0'
  | 'red1'
  | 'red2'
  | 'red3'
  | 'red4'
  | 'redDull0'
  | 'redDull1'
  | 'redDull2'
  | 'redDull3'
  | 'redDull4'
  | 'yellow0'
  | 'yellow1'
  | 'yellow2'
  | 'yellow3'
  | 'yellow4'
  | 'yellowDull0'
  | 'yellowDull1'
  | 'yellowDull2'
  | 'yellowDull3'
  | 'yellowDull4';

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

export function getGlobalColorVarName(color: GlobalColorKey): string {
  return `--${color}`;
}

export function getGlowStickColorVarName(color: GlowStickColor): string {
  return `--glow-stick-color-${color.replace(' ', '-')}`;
}
