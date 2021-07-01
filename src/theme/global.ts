import { createGlobalStyle } from "@egoist/vue-emotion";
import { IMainTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  	body {
      background-color: ${({ theme }: { theme: IMainTheme }) => {
        return theme.body;
      }};
      color: ${({ theme }: { theme: IMainTheme }) => theme.text};
     
      font-family: "Nunito", sans-serif;
      box-sizing: border-box;
    }
`;
