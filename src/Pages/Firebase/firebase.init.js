import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const initializeAuthApp = () => {
    initializeApp(firebaseConfig)
};


export default initializeAuthApp;   