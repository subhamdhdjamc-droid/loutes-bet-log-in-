// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAXM5wQM8c3C8L_zN8awTTO5d1bFjevW0A",
    authDomain: "loutes-club.firebaseapp.com",
    projectId: "loutes-club",
    storageBucket: "loutes-club.firebasestorage.app",
    messagingSenderId: "162518568105",
    appId: "1:162518568105:web:a0dcfe33dafaf885e46db8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.auth = auth;
window.RecaptchaVerifier = RecaptchaVerifier;
window.signInWithPhoneNumber = signInWithPhoneNumber;