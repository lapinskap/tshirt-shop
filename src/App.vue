<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FormWrapper />
  </div>
</template>

<script>
import FormWrapper from './components/Form/wrapper.vue'

export default {
  name: 'App',
  components: {
    FormWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
