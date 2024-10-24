// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjo8_1hUbSEbhsVgiJKfJDCHG6Jkf6CMs",
    authDomain: "expense-tracker-7d53f.firebaseapp.com",
    projectId: "expense-tracker-7d53f",
    storageBucket: "expense-tracker-7d53f.appspot.com",
    messagingSenderId: "607974798815",
    appId: "1:607974798815:web:b66b664b0d7760f636806a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('User:', user);
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
  }
};

const logout = () => {
  signOut(auth).then(() => {
    console.log('User signed out');
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
};

export { auth, signInWithGoogle, logout };
