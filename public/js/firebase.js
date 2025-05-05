// Configuración compartida de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVZMKlYrDeM1ao14Hfzoiz4g4H0HF4HEU",
  authDomain: "nk3io-fba5a.firebaseapp.com",
  projectId: "nk3io-fba5a",
  storageBucket: "nk3io-fba5a.appspot.com",
  messagingSenderId: "369749670993",
  appId: "1:369749670993:web:c180f70dc68eedc9228c70",
  measurementId: "G-EVJ5805FY0"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// Configuración adicional del proveedor Google
provider.setCustomParameters({
  prompt: 'select_account'
});

// Función para logout con redirección
const logout = async () => {
  try {
    await auth.signOut();
    window.location.href = 'login.html'; // Redirección garantizada
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

// Exportar las funciones necesarias
export { app, auth, db, provider, logout, firebase };
