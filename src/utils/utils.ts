export const capitalize = (str: string): string => str.toUpperCase();

export const english = 'English';
export const french = 'Français';
export const japanese = '日本語';
export type Language = typeof english | typeof french | typeof japanese;
export const languages: Language[] = [english, french, japanese];

export const snake = 'Snake';
export type Page = typeof snake;
export const pages: Page[] = [snake];
