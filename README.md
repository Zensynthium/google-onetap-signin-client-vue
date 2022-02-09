# vue-google-onetap-signin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Main Configuration
### Importing the Functionality
The main file that does all the work is the googleOneTapSignin.js located in src/composables. Looking at the HelloWorld.vue component it should be relatively easy to integrate into your project once all of the configuration below is completed.
### Enviornment Variables
If you're new to environmental variables make sure you restart the server after updating them (the credentials are NOT refreshed on hot reload).

Also, environmental variables must be prepended with VUE_APP_ to be imported into Vue 3 Applications, as shown in example.env. Turn example.env into .env. Also it's likely that whatever platform the client is hosted on will likely need the .env variables manually added in on the host site as .env files don't (and shouldn't) get uploaded to Github.
### Client ID
You can create a google API's Project and get a Client ID as documented here
https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid

### Google One-Tap Signin Server
Here's a sample repo with the server setup to listen on the route /verify-token (route can also be set to anything)
https://github.com/Zensynthium/google-onetap-server

### Google-One-Tap Library Repo
This is a Vue 3 Example Project utilizing this npm package. There are additional instructions here.
https://github.com/BurakGur/google-one-tap

### Live Demo
https://vue-google-onetap-signin-demo.netlify.app/
