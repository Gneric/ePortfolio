const THEME_KEY = 'theme';

export const saveThemeToLocalStorage = (theme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(THEME_KEY, theme);
  }
};

export const getThemeFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }
  return 'dark';
};