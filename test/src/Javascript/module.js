import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { 
    getAuth ,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult, 
    signInWithPopup, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAS_pGY89RWxGqAYwgU4IopqPXrKxcYIAE",
  authDomain: "padot-login.firebaseapp.com",
  projectId: "padot-login",
  storageBucket: "padot-login.appspot.com",
  messagingSenderId: "526776029559",
  appId: "1:526776029559:web:b719e1060606fe2d989172",
  measurementId: "G-1W9GL4PP6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


login.addEventListener('click',(e) =>{
    signInWithRedirect(auth, provider);
})