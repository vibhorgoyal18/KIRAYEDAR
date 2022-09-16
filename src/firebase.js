import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebase = {
    apiKey: "AIzaSyAcHBtnSLZax_r8Kne--AMo2QSt7ft2qg8",
    authDomain: "student-report-react.firebaseapp.com",
    projectId: "student-report-react",
    storageBucket: "student-report-react.appspot.com",
    messagingSenderId: "885814327920",
    appId: "1:885814327920:web:de5abb41de44105243d2b5",
    measurementId: "G-9BMS949SPZ"
};

const app = initializeApp(firebase);
const db = getFirestore(app)

export default db;