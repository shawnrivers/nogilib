interface Window {
  __themeMode: 'light' | 'dark' | 'auto';
  __setThemeMode(themeMode: 'light' | 'dark' | 'auto'): void;
  __setTheme(theme: 'light' | 'dark'): void;
}
