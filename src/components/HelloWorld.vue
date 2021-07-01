<template>
  <div class="hello">
    <Button>normal button</Button>
    <PinkButton>pink button</PinkButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { styled } from "@egoist/vue-emotion";

const Button = styled("button")`
  font-size: 17px;
`;

const PinkButton = styled(Button)`
  color: hotpink;
`;

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Button,
    PinkButton,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
