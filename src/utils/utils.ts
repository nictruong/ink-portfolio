export const capitalize = (str: string): string => str.toUpperCase();

export const english = 'English';
export const french = 'Français';
export const japanese = '日本語';
export type Language = typeof english | typeof french | typeof japanese;
export const languages: Language[] = [english, french, japanese];

export const language = 'Language';
export const home = 'Home';
export const profile = 'Profile';
export const snake = 'Snake';
export const games = 'Games';
export type Page = typeof snake | typeof profile | typeof home | typeof language | typeof games;
export const menuPages: Page[] = [profile, games];
export const gamePages: Page[] = [snake];
