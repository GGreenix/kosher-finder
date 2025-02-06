// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhSJsUjxEv0pchEAuBgp3GPo1cOxA9yLg",
  authDomain: "kosher-finder-c7071.firebaseapp.com",
  projectId: "kosher-finder-c7071",
  storageBucket: "kosher-finder-c7071.firebasestorage.app",
  messagingSenderId: "296808677195",
  appId: "1:296808677195:web:8fc841c2ef5c797be032ce",
  measurementId: "G-WH373ZYEQG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

