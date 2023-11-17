// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24yRWp6bi2yaxwp7_jlORlbwLV4byKX0",
  authDomain: "brave-cistern-394011.firebaseapp.com",
  projectId: "brave-cistern-394011",
  storageBucket: "brave-cistern-394011.appspot.com",
  messagingSenderId: "862865787636",
  appId: "1:862865787636:web:304febae90171645ceaca1",
  measurementId: "G-7Q8HBMGGK9",
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
