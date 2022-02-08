import googleOneTap from 'google-one-tap';
import axios from 'axios';

export default function() {
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
    const userData = googleOneTap(options, (res) => {
	  	// Send response to server
	  	// console.log(res);

      // Access-Control-Allow-Origin is mandatory as this is a "Complex" request. This must match the "origin" in the CorsOptions in the backend, or it will fail the preflight.
      const axiosOptions = {
        headers: { "Access-Control-Allow-Origin": CLIENT_URL }
      }

      // Google One-Tap Signin sends a POST request which must be sent to a server to be processed.
      const userData = axios.post(`${API_URL}/verify-token`, res, axiosOptions)
        .then(res => {
          // Continue Auth Flow with data from res.data
          console.log(res);
          return res.data
        })
        .catch(error => {
          console.log(error);
        });

        return userData
	  });

    return userData
  }

  return { googleOptions, oneTapSignin }
}
