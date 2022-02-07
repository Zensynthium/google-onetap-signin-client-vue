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
  ### Enviornment Variables
  If you're new to environmental variables make sure you restart the server after updating them (the credentials are NOT refreshed on hot reload).
  
  Also, environmental variables must be prepended with VUE_APP_ to be imported into Vue 3 Applications, as shown in example.env. Lastly turn example.env into .env.

  ### Client ID
  You can create a google API's Project and get a Client ID as documented here
  https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid

  ### Google One-Tap Signin Server
  Here's a sample repo with the server setup to listen on the route /verify-token (route can also be set to anything)
  https://example.com

  ### Google-One-Tap Repo
  This is a Vue 3 Example Project utilizing this npm package. There are additional instructions here.
  https://github.com/BurakGur/google-one-tap