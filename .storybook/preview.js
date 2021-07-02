import "../src/plugins"
import { MainTheme } from "../src/theme/theme";
import ThemeProvider from "../src/ThemeProvider.vue";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story) => ({
    components: { story, ThemeProvider},
    data(){
      return {theme: MainTheme}
    },
    provide(){
      return {
        theme: this.theme
      }
    },
    template: '<theme-provider><story /></theme-provider>'
  })
];