// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbXZMZHad8bPLUZIqzR7KWhXSHuKNBpQM",
  authDomain: "crud-fire-react-dcd71.firebaseapp.com",
  projectId: "crud-fire-react-dcd71",
  storageBucket: "crud-fire-react-dcd71.appspot.com",
  messagingSenderId: "835076134066",
  appId: "1:835076134066:web:a895090a00212f58d925ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);