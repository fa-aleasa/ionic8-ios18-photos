export type AppTheme = 'light' | 'dark' | 'auto';

export interface AppSettings {
  mode: AppTheme;
  language: string;
}

// HERE THEME
export const defaults: AppSettings = {
  mode: 'light',
  language: 'ar-SA',
};
