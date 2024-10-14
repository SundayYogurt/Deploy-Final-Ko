// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // นำเข้า getAuth จาก Firebase Auth
import { getFirestore } from "firebase/firestore"; // นำเข้า getFirestore จาก Firebase Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8TkT37wlnZv3loaXeVRqaHMRcMKII8N0",
    authDomain: "pubs-91e63.firebaseapp.com",
    projectId: "pubs-91e63",
    storageBucket: "pubs-91e63.appspot.com",
    messagingSenderId: "721093754175",
    appId: "1:721093754175:web:ba2ccfc982a7d2a4fba78a",
    measurementId: "G-7DRNPYS5X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // สร้างตัวแปร auth
const db = getFirestore(app); // สร้างตัวแปร db สำหรับ Firestore

// ส่งออกตัวแปร app, analytics, auth และ db
export { app, analytics, auth, db };
