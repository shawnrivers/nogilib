(function () {
  window.__themeMode = 'auto';

  var themeMode = 'auto';
  var localStorageThemeMode = window.localStorage.getItem('themeMode');

  if (localStorageThemeMode !== null) {
    themeMode = localStorageThemeMode;
  }

  window.__setTheme = function (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  };

  window.__setThemeMode = function (themeMode) {
    var theme = 'light';

    if (themeMode === 'auto') {
      var darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      if (darkModeMediaQuery.media === 'not all') {
        theme = 'light';
      } else {
        if (darkModeMediaQuery.matches) {
          theme = 'dark';
        } else {
          theme = 'light';
        }
      }
    } else {
      theme = themeMode;
    }

    window.__setTheme(theme);
    window.__themeMode = themeMode;
    window.localStorage.setItem('themeMode', themeMode);
  };

  window.__setThemeMode(themeMode);
})();
