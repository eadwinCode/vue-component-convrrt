import URLComponent from "../components/URL.vue";
import "../plugins";

export default {
  title: "URL/URLComponent",
  component: URLComponent,
};

export const defaultView = (args: any, { argTypes }: any) => {
  return {
    props: Object.keys(argTypes),
    components: { URLComponent },
    template: `<URLComponent v-bind="$props"  :style="{marginTop: '10rem',marginLeft: '10rem'}" />`,
  };
};
