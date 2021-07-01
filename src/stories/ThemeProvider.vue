<template>
  <div>
    <GlobalStyle :theme="theme" />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GlobalStyle } from "../theme/global";

export default Vue.extend({
  inject: ["theme"],
  components: {
    GlobalStyle,
  },
});
</script>
