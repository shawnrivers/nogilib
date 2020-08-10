import * as React from 'react';
import { Context } from 'client/store/app/context';

export const useDarkModeMediaQuery = () => {
  const { themeMode, setThemeKey } = React.useContext(Context);

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    // Change theme when system settings have been changed
    const handleDarkModeQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setThemeKey('dark');
      } else {
        setThemeKey('light');
      }
    };

    // Auto change theme based on system settings
    if (themeMode === 'auto') {
      if (darkModeMediaQuery.media === 'not all') {
        setThemeKey('light');
      } else {
        if (darkModeMediaQuery.matches) {
          setThemeKey('dark');
        } else {
          setThemeKey('light');
        }
      }

      if (typeof darkModeMediaQuery.addEventListener === 'function') {
        darkModeMediaQuery.addEventListener(
          'change',
          handleDarkModeQueryChange
        );
      } else {
        darkModeMediaQuery.addListener(handleDarkModeQueryChange);
      }
    }

    return () => {
      if (typeof darkModeMediaQuery.addEventListener === 'function') {
        darkModeMediaQuery.removeEventListener(
          'change',
          handleDarkModeQueryChange
        );
      } else {
        darkModeMediaQuery.removeListener(handleDarkModeQueryChange);
      }
    };
  }, [themeMode, setThemeKey]);
};
