import axios from 'axios';
import { ref } from 'vue';

export default function() {
  const CLIENT_ID = process.env.VUE_APP_CLIENT_ID
  const CLIENT_URL = process.env.VUE_APP_CLIENT_URL
  const API_URL = process.env.VUE_APP_API_URL

  const userData = ref()

  const googleOptions = {
		client_id: CLIENT_ID, // required
		auto_select: false, // optional
		cancel_on_tap_outside: true, // optional
		context: 'signin', // optional
	};

  const googleOneTap = ({ client_id, auto_select = false, cancel_on_tap_outside = false, context = 'signin' }, callback) => {
    const contextValue = ['signin', 'signup', 'use'].includes(context) ? context : 'signin';
    const googleScript = document.createElement('script');
    googleScript.setAttribute('src', 'https://accounts.google.com/gsi/client');
    document.head.appendChild(googleScript)
    // googleScript.onload instead of window.onload because window.onload can be triggered by other libraries and or just missed while googleScript.onload is more consistent
    googleScript.onload = () => {
      if (client_id) {
        window.google.accounts.id.initialize({
          client_id: client_id,
          callback: callback,
          auto_select: auto_select,
          cancel_on_tap_outside: cancel_on_tap_outside,
          context: contextValue
        });
        window.google.accounts.id.prompt();
      } else {
        console.error('client_id is missing');
      }
    };
  }

	const oneTapSignin = (options) => {
    googleOneTap(options, (res) => {
	  	// Send response to server
	  	// console.log(res);

      // Access-Control-Allow-Origin is mandatory as this is a "Complex" request. This must match the "origin" in the CorsOptions in the backend, or it will fail the preflight.
      const axiosOptions = {
        headers: { "Access-Control-Allow-Origin": CLIENT_URL }
      }

      // Google One-Tap Signin sends a POST request which must be sent to a server to be processed.
      axios.post(`${API_URL}/verify-token`, res, axiosOptions)
        .then(res => {
          // Continue Auth Flow with data from res.data
          console.log(res);
          userData.value = res.data
        })
        .catch(error => {
          console.log(error);
        });

	  });
  }

  return { googleOptions, oneTapSignin, userData }
}
