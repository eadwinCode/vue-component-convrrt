import { URLItemModel } from "../components/models/urlmodel";
import URListComponent from "../components/URList.vue";
import {
  faEnvelopeOpen,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "../plugins";

export default {
  title: "URL/URList",
  component: URListComponent,
  argTypes: { onSelectedAction: { action: "clicked" } },
};

const Template = (args: any, { argTypes }: any) => {
  return {
    props: Object.keys(argTypes),
    components: { URListComponent },
    template:
      '<URListComponent :actions="actions" @onSelectedAction="onSelectedAction" />',
  };
};

export const List = Template.bind({});
(List as any).args = {
  actions: [
    new URLItemModel(
      faEnvelopeOpen,
      "Link to Email",
      "required|email",
      "email"
    ),
    new URLItemModel(faNewspaper, "Link to URL", "required", "text"),
    new URLItemModel(faPhoneAlt, "Link to Phone", "required", "number"),
  ],
};
