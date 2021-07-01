import { IMainTheme } from "@/theme/theme";
import { styled } from "@egoist/vue-emotion";

export const InputField = styled("input")`
  border: 1px solid
    ${({ theme, hasErrors }: { theme: IMainTheme; hasErrors: boolean }) =>
      hasErrors ? theme.borderError : theme.border};
`;
