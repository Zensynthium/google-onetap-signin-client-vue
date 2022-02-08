<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App with Google One-Tap Signin!"/>
  <!-- <p>Name: {{ userData.name}}</p>
  <p>Email: {{ userData.email }}</p>
  <p>Email Verified: {{ userData.email_verified }}</p>
  <img :src="userData.picture" alt="User's Profile Picture"> -->

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import googleOneTapSignin from './composables/googleOneTapSignin' 

import { onMounted, ref, watch } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    // const userData = ref({
    //   name: '',
    //   email: '',
    //   email_verified: '',
    //   picture: ''
    // })

    const userData = ref()

    watch(userData, () => {
      console.log(userData.value)
    })

    onMounted(() => {
      const { googleOptions, oneTapSignin } = googleOneTapSignin()
      userData.value = oneTapSignin(googleOptions)
    })

    // return { userData }
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
