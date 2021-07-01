import { ValidationProvider } from "vee-validate";
import { styled } from "@egoist/vue-emotion";
import { IMainTheme } from "@/theme/theme";

export const StyledValidationProvider = styled(ValidationProvider)`
  position: relative;
  display: flex;
  width: 100%;
  outline: 1px solid transparent;
  border: 0;
  border-radius: 8px;
  overflow: auto;

  input {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    padding: 0.275rem 0.65rem;
    font-size: 1rem;
    line-height: 1.5;
    background-color: ${({ theme }: { theme: IMainTheme }) => theme.body};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    border-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &:focus {
      outline: 0;
    }
  }
  div {
    display: flex;
    margin-left: -1px;
    > * {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;
