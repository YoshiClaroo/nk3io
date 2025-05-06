import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVZMKlYrDeM1ao14Hfzoiz4g4H0HF4HEU",
  authDomain: "nk3io-fba5a.firebaseapp.com",
  projectId: "nk3io-fba5a",
  storageBucket: "nk3io-fba5a.appspot.com",
  messagingSenderId: "369749670993",
  appId: "1:369749670993:web:c180f70dc68eedc9228c70",
  measurementId: "G-EVJ5805FY0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const logout = async () => {
  try {
    await signOut(auth);
    window.location.href = 'login.html';
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

export { app, auth, db, provider, logout };
