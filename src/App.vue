<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App with Google One-Tap Signin!"/>
  <p>Name: {{ googleUserData.name}}</p>
  <p>Email: {{ googleUserData.email }}</p>
  <p>Email Verified: {{ googleUserData.email_verified }}</p>
  <img :src="googleUserData.picture" alt="User's Profile Picture">

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
    const googleUserData = ref({
      name: '',
      email: '',
      email_verified: '',
      picture: ''
    })

    onMounted(() => {
      const { googleOptions, oneTapSignin, userData } = googleOneTapSignin()
      oneTapSignin(googleOptions)

      watch(userData, () => {
        console.log(userData.value)
        googleUserData.value = userData.value
      })
    })

    return { googleUserData }
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
