import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu4Z8SiU8f4_2dFFbwOMfuGKQJyx0DfuQ",
  authDomain: "ytapp-clone.firebaseapp.com",
  projectId: "ytapp-clone",
  storageBucket: "ytapp-clone.appspot.com",
  messagingSenderId: "996765836333",
  appId: "1:996765836333:web:26b57137fb1d10e8ff04a4",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
