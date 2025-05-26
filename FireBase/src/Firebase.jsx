import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSoPlxQHj9Ss_6en7kuliPhkiXGeom0fM",
    authDomain: "fir-6305d.firebaseapp.com",
    projectId: "fir-6305d",
    storageBucket: "fir-6305d.firebasestorage.app",
    messagingSenderId: "981180475027",
    appId: "1:981180475027:web:f8784d76f671fe340c8f66",
    measurementId: "G-1TVMEYVNDJ"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);