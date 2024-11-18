import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvPoYZIabHcV78QonjWWMQ4tkj6djG0Ks",
  authDomain: "chamados-d2cc0.firebaseapp.com",
  projectId: "chamados-d2cc0",
  storageBucket: "chamados-d2cc0.firebasestorage.app",
  messagingSenderId: "776433052175",
  appId: "1:776433052175:web:a6186cdbef507483e7917a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

export {db,auth}