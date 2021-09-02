import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// yung cinopy natin sa firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcytznQ1TDS_5EyvnjTSnsoFt_MVKq1Bs",
  authDomain: "firechat-e9598.firebaseapp.com",
  projectId: "firechat-e9598",
  storageBucket: "firechat-e9598.appspot.com",
  messagingSenderId: "1070398589294",
  appId: "1:1070398589294:web:1d37ecff04074e6437d97f",
  measurementId: "G-YXXF3V7J4C"
})

// access firestore, yung lalagyanan ng database natin
const db = firebaseApp.firestore()

// for authentication like google
const auth = firebase.auth()

export {db, auth} 


