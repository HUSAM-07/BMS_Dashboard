import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCriPiwAuvFyKbOHEmiMh2YyYy9mDlkdTw",
  authDomain: "bms-dashboard-a8061.firebaseapp.com",
  databaseURL: "https://bms-dashboard-a8061-default-rtdb.firebaseio.com",
  projectId: "bms-dashboard-a8061",
  storageBucket: "bms-dashboard-a8061.firebasestorage.app",
  messagingSenderId: "265499724986",
  appId: "1:265499724986:web:79d86613984da447fcc683"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
