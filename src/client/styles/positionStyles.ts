import {
  ThemeColorsBackground,
  ThemeColorsForeground,
  ThemeColorVariants,
} from './tokens/colors';

export const POSITION_STYLES: Record<
  'center' | 'fukujin' | 'selected' | 'under',
  {
    text: 'C' | 'F' | 'S' | 'U';
    backgroundColor: keyof ThemeColorsBackground;
    foregroundColor: keyof ThemeColorsForeground;
    backgroundColorVariant: keyof ThemeColorVariants;
    textColorVariant: keyof ThemeColorVariants;
  }
> = {
  center: {
    text: 'C',
    backgroundColor: 'primary',
    backgroundColorVariant: 'variant0',
    foregroundColor: 'onPrimary',
    textColorVariant: 'standard',
  },
  fukujin: {
    text: 'F',
    backgroundColor: 'secondary',
    backgroundColorVariant: 'variant1',
    foregroundColor: 'onSecondary',
    textColorVariant: 'standard',
  },
  selected: {
    text: 'S',
    backgroundColor: 'secondary',
    backgroundColorVariant: 'standard',
    foregroundColor: 'onSecondary',
    textColorVariant: 'standard',
  },
  under: {
    text: 'U',
    backgroundColor: 'surface',
    backgroundColorVariant: 'standard',
    foregroundColor: 'onSurface',
    textColorVariant: 'standard',
  },
};
