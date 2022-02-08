<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App with Google One-Tap Signin!"/>
  <p>Current Location: {{ window.location.href }}</p>
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
      const { options, oneTapSignin } = googleOneTapSignin()
      oneTapSignin(options)
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
