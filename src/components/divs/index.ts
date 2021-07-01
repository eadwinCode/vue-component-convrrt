import { IMainTheme } from "@/theme/theme";
import { styled } from "@egoist/vue-emotion";

export const URLPreview = styled("div")`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  width: 100%;
`;

export const URLPreviewContent = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  span {
    display: none;
    cursor: pointer;
  }
  &:hover {
    span {
      display: block;
    }
  }
`;

export const URLContainer = styled("div")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 300px;
  max-width: 300px;
  border: 1px solid
    ${(props: { isEditing: boolean }) =>
      props.isEditing ? "transparent" : "gray"};
  border-radius: 8px;
  box-sizing: content;
`;
