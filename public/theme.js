(function () {
  var themeMode = 'auto';
  var localStorageThemeMode = window.localStorage.getItem('themeMode');

  if (localStorageThemeMode !== null) {
    themeMode = localStorageThemeMode;
  }

  if (themeMode === 'auto') {
    var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.media === 'not all') {
      window.__theme = 'light';
    } else {
      if (darkModeMediaQuery.matches) {
        window.__theme = 'dark';
      } else {
        window.__theme = 'light';
      }
    }
  } else {
    window.__theme = themeMode;
  }

  window.__themeMode = themeMode;

  var themeVariables = {
    light: {
      '--color-primary-standard': '#CB78D9',
      '--color-primary-variant0': '#AE37C3',
      '--color-primary-variant1': '#812990',
      '--color-secondary-standard': '#FBE297',
      '--color-secondary-variant0': '#FAD566',
      '--color-secondary-variant1': '#F8C630',
      '--color-background-standard': '#FFFFFF',
      '--color-background-variant0': '#CCCCCC',
      '--color-background-variant1': '#999999',
      '--color-surface-standard': '#FFFFFF',
      '--color-surface-variant0': '#CCCCCC',
      '--color-surface-variant1': '#999999',
      '--color-onPrimary-standard': '#FFFFFF',
      '--color-onPrimary-variant0': '#CCCCCC',
      '--color-onPrimary-variant1': '#999999',
      '--color-onSecondary-standard': '#1A1A1A',
      '--color-onSecondary-variant0': '#4D4D4D',
      '--color-onSecondary-variant1': '#808080',
      '--color-onBackground-standard': '#1A1A1A',
      '--color-onBackground-variant0': '#666666',
      '--color-onBackground-variant1': '#999999',
      '--color-onSurface-standard': '#1A1A1A',
      '--color-onSurface-variant0': '#666666',
      '--color-onSurface-variant1': '#999999',
    },
    dark: {
      '--color-primary-standard': '#CB78D9',
      '--color-primary-variant0': '#AE37C3',
      '--color-primary-variant1': '#812990',
      '--color-secondary-standard': '#FBE297',
      '--color-secondary-variant0': '#FAD566',
      '--color-secondary-variant1': '#F8C630',
      '--color-background-standard': '#1A1A1A',
      '--color-background-variant0': '#4D4D4D',
      '--color-background-variant1': '#808080',
      '--color-surface-standard': '#1A1A1A',
      '--color-surface-variant0': '#4D4D4D',
      '--color-surface-variant1': '#808080',
      '--color-onPrimary-standard': '#FFFFFF',
      '--color-onPrimary-variant0': '#CCCCCC',
      '--color-onPrimary-variant1': '#999999',
      '--color-onSecondary-standard': '#1A1A1A',
      '--color-onSecondary-variant0': '#4D4D4D',
      '--color-onSecondary-variant1': '#808080',
      '--color-onBackground-standard': '#FFFFFF',
      '--color-onBackground-variant0': '#CCCCCC',
      '--color-onBackground-variant1': '#999999',
      '--color-onSurface-standard': '#FFFFFF',
      '--color-onSurface-variant0': '#CCCCCC',
      '--color-onSurface-variant1': '#999999',
    },
  };
})();
