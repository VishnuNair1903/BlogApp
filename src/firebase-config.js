// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs6Q20Jzd8rJOh1wIZCC_b7YIJ7kwHsEk",
  authDomain: "blogproject-c7ea7.firebaseapp.com",
  projectId: "blogproject-c7ea7",
  storageBucket: "blogproject-c7ea7.appspot.com",
  messagingSenderId: "841307336691",
  appId: "1:841307336691:web:9a1a6de12cb8b76e04ec86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

