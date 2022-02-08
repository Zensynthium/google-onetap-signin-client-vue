import googleOneTap from 'google-one-tap';

export default function() {
  const axios = require('axios');
  // axios.defaults.withCredentials = true;

  const CLIENT_ID = process.env.VUE_APP_CLIENT_ID
  const CLIENT_URL = process.env.VUE_APP_CLIENT_URL
  const API_URL = process.env.VUE_APP_API_URL

  const googleOptions = {
		client_id: CLIENT_ID, // required
		auto_select: false, // optional
		cancel_on_tap_outside: true, // optional
		context: 'signin', // optional
	};
  
	const oneTapSignin = (options) => {
    googleOneTap(options, (res) => {
	  	// Send response to server
	  	console.log(res);

      const axiosOptions = {
        headers: { "Access-Control-Allow-Origin": CLIENT_URL }
      }

      // Google One-Tap Signin sends a POST request which must be sent to a server to be processed.
      axios.post(`${API_URL}/verify-token`, res, axiosOptions)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
	  });
  }

  return { googleOptions, oneTapSignin }
}
