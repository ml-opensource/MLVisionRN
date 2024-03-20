export const theme = {
  breakpoints: {mobile: 555},
};

export type Theme = typeof theme;

declare module 'bomonti' {
  export interface DefaultTheme extends Theme {}
}
