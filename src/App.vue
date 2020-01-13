<template>
  <div id="app">
    <ComposeButton />  
  </div>
</template>

<script>
import ComposeButton from "./components/ComposeButton.vue";

export default {
  name: "app",
  components: {
    ComposeButton
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
