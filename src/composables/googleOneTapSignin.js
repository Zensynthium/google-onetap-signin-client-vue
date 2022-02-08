import googleOneTap from 'google-one-tap';

export default function() {
  const axios = require('axios');
  // axios.defaults.withCredentials = true;

  const clientID = process.env.VUE_APP_CLIENT_ID

  const options = {
		client_id: clientID, // required
		auto_select: false, // optional
		cancel_on_tap_outside: true, // optional
		context: 'signin', // optional
	};
  
	const oneTapSignin = (options) => {
    googleOneTap(options, (res) => {
	  	// Send response to server
	  	console.log(res);

      console.log(process.env.VUE_APP_CLIENT_URL)
      
      const options = {
        headers: { "Access-Control-Allow-Origin": process.env.VUE_APP_CLIENT_URL }
      }

      // Google One-Tap Signin sends a POST request which must be sent to a server to be processed.
      axios.post(`${process.env.VUE_APP_API_URL}verify-token`, res, options)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
	  });
  }

  return { options, oneTapSignin }
}
