import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKs9CLniN1y741puN3_SIPsFpLmpAE-8o",
    authDomain: "photo-gallery-79ead.firebaseapp.com",
    projectId: "photo-gallery-79ead",
    storageBucket: "photo-gallery-79ead.appspot.com",
    messagingSenderId: "832065586080",
    appId: "1:832065586080:web:3f99b8b82a5c82fb0adac5"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
