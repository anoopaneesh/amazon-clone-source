import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAiUyE407Z5pqlh7dVSTMNUs_lWhdGv5nU",
    authDomain: "e-clone-fbc42.firebaseapp.com",
    projectId: "e-clone-fbc42",
    storageBucket: "e-clone-fbc42.appspot.com",
    messagingSenderId: "163098881573",
    appId: "1:163098881573:web:2e0fcfc62ffc7984f619cc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebaseApp.auth()
