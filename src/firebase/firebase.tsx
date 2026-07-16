import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhK6aljPS-4UCbWTNWWTcQeg0vJdjfknc",
  authDomain: "vision-ai-6ad06.firebaseapp.com",
  projectId: "vision-ai-6ad06",
  storageBucket: "vision-ai-6ad06.firebasestorage.app",
  messagingSenderId: "709362824750",
  appId: "1:709362824750:web:7f96dd21ecf485faa191bf",
  measurementId: "G-2L9Z014MEP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;