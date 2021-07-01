import { IMainTheme } from "@/theme/theme";
import { styled } from "@egoist/vue-emotion";

export const OkButton = styled("span")`
  transition: all 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: ${({
    theme,
    hasErrors,
  }: {
    theme: IMainTheme;
    hasErrors: boolean;
  }) => (hasErrors ? theme.error : theme.border)};
  display: flex;
  justify-content: center;
  color: ${({ theme, hasErrors }: { theme: IMainTheme; hasErrors: boolean }) =>
    hasErrors ? theme.colors.white : theme.text};
  border-color: ${({
    theme,
    hasErrors,
  }: {
    theme: IMainTheme;
    hasErrors: boolean;
  }) => (hasErrors ? theme.borderError : theme.border)};
  outline: none;
  width: 32px;
`;

export const CloseButton = styled(OkButton)`
  background: ${({ theme }: { theme: IMainTheme }) => theme.colors.boxGray};
  display: flex;
  justify-content: center;
  color: ${({ theme }: { theme: IMainTheme }) => theme.text};
  border: 1px solid
    ${({ theme, hasErrors }: { theme: IMainTheme; hasErrors: boolean }) =>
      hasErrors ? theme.borderError : theme.border};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const URLActionToggle = styled("button")`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: ${({ theme }: { theme: IMainTheme }) =>
    theme.colors.boxGray};
  border: none;
  border-radius: 0.25rem;
  position: relative;
  &:hover {
    background: ${({ theme }: { theme: IMainTheme }) => theme.border};
  }
  &:active {
    background: #494c53;
    color: #fff;
  }
  ul {
    position: absolute;
    left: -118px;
  }
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const URLToggleExternal = styled(URLActionToggle)`
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
