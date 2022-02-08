<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <h3>Demo Github Repo</h3><br/>
    <a href="https://github.com/Zensynthium/vue-google-onetap-signin" target="_blank" rel="noopener noreferrer">https://github.com/Zensynthium/vue-google-onetap-signin</a>
    <h3>Google Profile Information</h3>
    <p>This information will populate after the Google One-Tap Signin is completed.</p>
    <img :title="googleUserData.name" :src="googleUserData.picture" alt="User's Profile Picture">
    <p>Name: {{ googleUserData.name}}</p>
    <p>Email: {{ googleUserData.email }}</p>
    <p>Email Verified: {{ googleUserData.email_verified }}</p>
  </div>
</template>

<script>
import googleOneTapSignin from '../composables/googleOneTapSignin' 
import { onMounted, ref, watch } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
