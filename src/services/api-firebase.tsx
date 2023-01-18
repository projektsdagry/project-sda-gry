import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChERHUVCbCUFHCKb4B5jwO1T0ok2T1G1c",
  authDomain: "gamesnewsapi.firebaseapp.com",
  projectId: "gamesnewsapi",
  storageBucket: "gamesnewsapi.appspot.com",
  messagingSenderId: "994318960589",
  appId: "1:994318960589:web:88ff9157769ceb17eaa684",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
