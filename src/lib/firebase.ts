import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh1xxmW94yO2Il3rr88XkQTKTrKS_1tNc",
  authDomain: "joseph-b9916.firebaseapp.com",
  projectId: "joseph-b9916",
  storageBucket: "joseph-b9916.firebasestorage.app",
  messagingSenderId: "774450571739",
  appId: "1:774450571739:web:fcbd0d12716cd74e60dffe",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
