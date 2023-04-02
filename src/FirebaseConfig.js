import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5pw43sga-YJET4Yht9mFD_yK00WBaDoU",
  authDomain: "electromarket-7.firebaseapp.com",
  projectId: "electromarket-7",
  storageBucket: "electromarket-7.appspot.com",
  messagingSenderId: "136350017064",
  appId: "1:136350017064:web:3cc5854e5d3a6a6473771d"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)