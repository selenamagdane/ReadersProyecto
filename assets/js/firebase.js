 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
 import { 
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDSKLPoRh6kbB1oiAsO7R7vzPpR78CLYDQ",
   authDomain: "readers-82983.firebaseapp.com",
   projectId: "readers-82983",
   storageBucket: "readers-82983.appspot.com",
   messagingSenderId: "806105550012",
   appId: "1:806105550012:web:e6d97b6e3af10e3aa6d4b9",
   measurementId: "G-38048PG3P7"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const firestore = getFirestore(app);
 export const db = getFirestore(app);

 console.log(app)

export const createTask = (title, description, username, userPhotoURL, date, time) => addDoc(collection(db, "post"),{title, description, username, userPhotoURL, date, time});

export const getTask = id => getDoc(doc(db, "post", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "post"), callback);

export const updateTask = (id, newFields) => updateDoc(doc(db, "post", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "post", id));
