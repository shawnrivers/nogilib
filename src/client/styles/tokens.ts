import { useTheme as emotionUseTheme } from "emotion-theming";
import { GlobalColor, globalColors } from "./colors";

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

export type BackgroundColor = keyof ThemeColors["background"];

type TypographyStyles = {
  fontSize: string;
  fontWeight: "normal" | "bold";
};

type ThemeTypography = {
  h1: TypographyStyles;
  h2: TypographyStyles;
  h3: TypographyStyles;
  h4: TypographyStyles;
  body1: TypographyStyles;
  body2: TypographyStyles;
  caption: TypographyStyles;
};

export type TypographyVariant = keyof ThemeTypography;

export type ThemeKey = "light" | "dark";

export type ThemeSpacing = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export type Theme = {
  colors: {
    theme: ThemeColors;
    global: {
      [key in GlobalColor]: string;
    };
  };
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  key: ThemeKey;
};

const typography: ThemeTypography = {
  h1: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "normal",
  },
  body2: {
    fontSize: "0.9rem",
    fontWeight: "normal",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: "normal",
  },
};

export const spacing: ThemeSpacing = {
  none: "0rem",
  xxs: "0.25rem",
  xs: "0.5rem",
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem",
  xxl: "4rem",
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
} = globalColors;

const commonStyles: Pick<Theme, "typography" | "spacing"> = {
  typography,
  spacing,
};

const lightTheme: Theme = {
  key: "light",
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
    global: globalColors,
  },
  ...commonStyles,
};

const darkTheme: Theme = {
  key: "dark",
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
    global: globalColors,
  },
  ...commonStyles,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useTheme = () => emotionUseTheme<Theme>();
