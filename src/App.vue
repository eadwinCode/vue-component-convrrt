<template>
  <div id="app">
    <theme-provider>
      <URLComponent
        :style="{
          marginTop: '10rem',
          marginLeft: '10rem',
        }"
      />
    </theme-provider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import URLComponent from "@/components/URL.vue"; // @ is an alias to /src
import ThemeProvider from "@/ThemeProvider.vue";

export default Vue.extend({
  components: {
    URLComponent,
    "theme-provider": ThemeProvider,
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
