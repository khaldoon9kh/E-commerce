import * as firebase from 'firebase';
import 'firebase/database';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyChxwEslqWx8-JBLgIL-DFZL4T8yAwwv00",
  authDomain: "ecomerc-a561d.firebaseapp.com",
  databaseURL: "https://ecomerc-a561d.firebaseio.com",
  projectId: "ecomerc-a561d",
  storageBucket: "ecomerc-a561d.appspot.com",
  messagingSenderId: "115461934811",
  appId: "1:115461934811:web:209b7734ec5d8b449b86fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();