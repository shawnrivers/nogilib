import * as React from 'react';
import { ThemeMode } from 'client/types/themeMode';

type UseDarkModeMediaQueryParams = {
  themeMode: ThemeMode;
  onDarkMode(): void;
  onLightMode(): void;
};

export const useDarkModeMediaQuery = (params: UseDarkModeMediaQueryParams) => {
  React.useEffect(() => {
    const { themeMode, onLightMode, onDarkMode } = params;

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    function handleDarkModeQueryChange(event: MediaQueryListEvent) {
      if (event.matches) {
        onDarkMode();
      } else {
        onLightMode();
      }
    }

    if (themeMode === null || themeMode === 'auto') {
      if (darkModeMediaQuery.media === 'not all') {
        onLightMode();
      } else {
        if (darkModeMediaQuery.matches) {
          onDarkMode();
        } else {
          onLightMode();
        }
      }

      if (themeMode === 'auto') {
        darkModeMediaQuery.addEventListener(
          'change',
          handleDarkModeQueryChange
        );
      }
    }

    return () => {
      darkModeMediaQuery.removeEventListener(
        'change',
        handleDarkModeQueryChange
      );
    };
  }, [params]);
};
