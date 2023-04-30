import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBp_uh7e41fqPdHB3k3zUyB4c1PCIBwosM",
  authDomain: "teest-f9054.firebaseapp.com",
  projectId: "teest-f9054",
  storageBucket: "teest-f9054.appspot.com",
  messagingSenderId: "328890208872",
  appId: "1:328890208872:web:51158222f5d9742f23e1dd",
  measurementId: "G-MXBLTGBEEL"
};
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();