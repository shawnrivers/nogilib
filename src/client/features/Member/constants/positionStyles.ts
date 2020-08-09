import {
  ThemeColorsBackground,
  ThemeColorsForeground,
  ThemeColorVariants,
} from 'client/styles/colors';

export const POSITION_STYLES: Record<
  'center' | 'fukujin' | 'selected' | 'under',
  {
    text: 'C' | 'F' | 'S' | 'U';
    backgroundColor: keyof ThemeColorsBackground;
    foregroundColor: keyof ThemeColorsForeground;
    backgroundColorVariant: keyof ThemeColorVariants;
    textColorVariant: keyof ThemeColorVariants;
    bold: boolean;
  }
> = {
  center: {
    text: 'C',
    backgroundColor: 'primary',
    backgroundColorVariant: 'variant0',
    foregroundColor: 'onPrimary',
    textColorVariant: 'standard',
    bold: true,
  },
  fukujin: {
    text: 'F',
    backgroundColor: 'secondary',
    backgroundColorVariant: 'variant1',
    foregroundColor: 'onSecondary',
    textColorVariant: 'standard',
    bold: true,
  },
  selected: {
    text: 'S',
    backgroundColor: 'secondary',
    backgroundColorVariant: 'standard',
    foregroundColor: 'onSecondary',
    textColorVariant: 'standard',
    bold: false,
  },
  under: {
    text: 'U',
    backgroundColor: 'surface',
    backgroundColorVariant: 'standard',
    foregroundColor: 'onSurface',
    textColorVariant: 'standard',
    bold: false,
  },
};
