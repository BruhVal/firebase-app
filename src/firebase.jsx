
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUGvOAG0U312Rw0VqLeoQkhauhNGKW09M",
    authDomain: "fireproj-e7443.firebaseapp.com",
    projectId: "fireproj-e7443",
    storageBucket: "fireproj-e7443.appspot.com",
    messagingSenderId: "271802205272",
    appId: "1:271802205272:web:724acf3d22c4846f4ab62d",
    measurementId: "G-CWDE4ZZVP5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
