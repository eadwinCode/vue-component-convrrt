export interface IColorTheme {
  darkerGray: string;
  lighterGray: string;
  lightGray: string;
  darkGray: string;
  white: string;
  boxGray: string;
  error: string;
}

export interface IMainTheme {
  body: string;
  text: string;
  error: string;
  borderError: string;
  border: string;
  colors: IColorTheme;
}

export const colorTheme = {
  darkerGray: "#494C53",
  lighterGray: "#F0F2F6",
  lightGray: "#BCC2CB",
  darkGray: "#494C53",
  white: "#ffffff",
  boxGray: "#F0F2F6",
  error: "#E74F30",
};

export const MainTheme = {
  body: colorTheme.white,
  text: colorTheme.darkerGray,
  error: colorTheme.error,
  borderError: "#C73222",
  border: "#BCC2CB",
  colors: colorTheme,
};
