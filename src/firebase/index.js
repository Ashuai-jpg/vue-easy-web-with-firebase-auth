// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR4mYoz357Pk_C3usLEH92TS2g6BIxFFE",
  authDomain: "vue-login-learning.firebaseapp.com",
  projectId: "vue-login-learning",
  storageBucket: "vue-login-learning.appspot.com",
  messagingSenderId: "902624228813",
  appId: "1:902624228813:web:da641cf16aabfe9a834084"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}