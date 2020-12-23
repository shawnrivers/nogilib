import * as React from 'react';
import { LanguageContext } from 'client/store/language/context';

type DarkModeQueryEventHandler = (event: MediaQueryListEvent) => void;

export function useDarkModeMediaQuery() {
  const { themeMode, setThemeKey } = React.useContext(LanguageContext);

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const handleDarkModeQueryChange = createDarkModeQueryChangeHandler({
      onMatch: () => setThemeKey('dark'),
      onUnMatch: () => setThemeKey('light'),
    });

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

      subscribeDarkModeMediaQueryEventListeners(
        darkModeMediaQuery,
        handleDarkModeQueryChange
      );
    }

    return () => {
      clearUpDarkModeMediaQueryEventListeners(
        darkModeMediaQuery,
        handleDarkModeQueryChange
      );
    };
  }, [themeMode, setThemeKey]);
}

function createDarkModeQueryChangeHandler(params: {
  onMatch(): void;
  onUnMatch(): void;
}): DarkModeQueryEventHandler {
  function handleDarkModeQueryChange(event: MediaQueryListEvent) {
    if (event.matches) {
      params.onMatch();
    } else {
      params.onUnMatch();
    }
  }

  return handleDarkModeQueryChange;
}

function subscribeDarkModeMediaQueryEventListeners(
  darkModeMediaQuery: MediaQueryList,
  onDarkModeQueryChange: DarkModeQueryEventHandler
) {
  if (typeof darkModeMediaQuery.addEventListener === 'function') {
    darkModeMediaQuery.addEventListener('change', onDarkModeQueryChange);
  } else {
    darkModeMediaQuery.addListener(onDarkModeQueryChange);
  }
}

function clearUpDarkModeMediaQueryEventListeners(
  darkModeMediaQuery: MediaQueryList,
  onDarkModeQueryChange: DarkModeQueryEventHandler
) {
  if (typeof darkModeMediaQuery.addEventListener === 'function') {
    darkModeMediaQuery.removeEventListener('change', onDarkModeQueryChange);
  } else {
    darkModeMediaQuery.removeListener(onDarkModeQueryChange);
  }
}
