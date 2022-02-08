<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App with Google One-Tap Signin!"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import googleOneTapSignin from './composables/googleOneTapSignin' 

import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    onMounted(() => {
      const { googleOptions, oneTapSignin } = googleOneTapSignin()
      oneTapSignin(googleOptions)
    })
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
