
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCu7bCODnlPjMHA8M2bbySC4MweOGO_wlA",
  authDomain: "proyecto-react-40799.firebaseapp.com",
  projectId: "proyecto-react-40799",
  storageBucket: "proyecto-react-40799.appspot.com",
  messagingSenderId: "613938031418",
  appId: "1:613938031418:web:6da8dc16426d9cba80fe03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);