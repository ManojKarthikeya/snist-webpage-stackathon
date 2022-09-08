import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCaYHLwAaNPWa8XTlF-i9SvC7Mk_OAYCVE",
    authDomain: "snist-stackathon.firebaseapp.com",
    projectId: "snist-stackathon",
    storageBucket: "snist-stackathon.appspot.com",
    messagingSenderId: "662946027917",
    appId: "1:662946027917:web:081ee77b6c9191b2dd85c4",
    measurementId: "G-WN8H3G06SS"
  });

  export const auth = app.auth()
  export default app