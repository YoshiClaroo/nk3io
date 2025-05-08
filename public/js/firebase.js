// public/js/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.7.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAVZMKlYrDeM1ao14Hfzoiz4g4H0HF4HEU",
  authDomain: "nk3io-fba5a.firebaseapp.com",
  projectId: "nk3io-fba5a",
  storageBucket: "nk3io-fba5a.firebasestorage.app",
  messagingSenderId: "369749670993",
  appId: "1:369749670993:web:c180f70dc68eedc9228c70",
  measurementId: "G-EVJ5805FY0"
};

const app = initializeApp(firebaseConfig);
// No inicializamos analytics ya que no lo usamos
export const auth = getAuth(app);
export const db = getFirestore(app);
