import * as React from 'react';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import { ThemeKey } from 'client/styles/tokens/colors';

type DarkModeQueryEventHandler = (event: MediaQueryListEvent) => void;

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

export function useDarkModeMediaQuery() {
  const { themeMode, setThemeKey } = useThemeContext();

  const setTheme = React.useCallback(
    (theme: ThemeKey) => {
      setThemeKey(theme);
      window.__setTheme(theme);
    },
    [setThemeKey]
  );

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const handleDarkModeQueryChange = createDarkModeQueryChangeHandler({
      onMatch: () => setTheme('dark'),
      onUnMatch: () => setTheme('light'),
    });

    // Auto change theme based on system settings
    if (themeMode === 'auto') {
      if (darkModeMediaQuery.media === 'not all') {
        setTheme('light');
      } else {
        if (darkModeMediaQuery.matches) {
          setTheme('dark');
        } else {
          setTheme('light');
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
  }, [themeMode, setThemeKey, setTheme]);
}
