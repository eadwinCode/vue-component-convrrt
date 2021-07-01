<template>
  <div id="app">
    <GlobalStyle :theme="theme" />
    <URLComponent
      :style="{
        marginTop: '10rem',
        marginLeft: '10rem',
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import URLComponent from "@/components/URL.vue"; // @ is an alias to /src
import { GlobalStyle } from "@/theme/global";

export default Vue.extend({
  inject: ["theme"],
  components: {
    URLComponent,
    GlobalStyle,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
