// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufRWhe0Qq9QqJPQCMSQyvYNZRC9K_Zbk",
  authDomain: "warehouse-management-web-be2f4.firebaseapp.com",
  projectId: "warehouse-management-web-be2f4",
  storageBucket: "warehouse-management-web-be2f4.appspot.com",
  messagingSenderId: "866272516444",
  appId: "1:866272516444:web:b70108f5fccd56319d8999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;