declare global {
  interface Window {
    __theme: 'light' | 'dark';
    __themeMode: 'light' | 'dark' | 'auto';
  }
}
