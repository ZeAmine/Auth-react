import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD2ZA7pA8y2bbzQLPT4bMDdgkBqTrnev7I",
  authDomain: "auth-react-d2a35.firebaseapp.com",
  projectId: "auth-react-d2a35",
  storageBucket: "auth-react-d2a35.appspot.com",
  messagingSenderId: "536733095211",
  appId: "1:536733095211:web:9813f6f0c123cc519ba16e",
});

export const auth = app.auth();
export default app;
