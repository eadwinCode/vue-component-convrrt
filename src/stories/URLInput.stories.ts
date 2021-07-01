import URLInputComponent from "../components/URLInput.vue";
import "../plugins";

export default {
  title: "URL/URLInput",
  component: URLInputComponent,
  argTypes: {
    inputType: {
      control: { type: "select", options: ["email", "text", "number"] },
    },
    validationRules: {
      control: { type: "select", options: ["required", "required|email"] },
    },
  },
};

const Template = (args: any, { argTypes }: any) => {
  return {
    props: Object.keys(argTypes),
    components: { URLInputComponent },
    template:
      '<URLInputComponent v-bind="$props" @onCancelled="onCancelled" @onSubmit="onSubmit" />',
  };
};

export const Email = Template.bind({});
(Email as any).args = {
  inputType: "email",
  validationRules: "required|email",
};
