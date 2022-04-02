import firebase from 'firebase'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBZuSwmfzX8-T_3dliFj5PHGoiCF4Ol808",
    authDomain: "fireblogz-5b9f3.firebaseapp.com",
    projectId: "fireblogz-5b9f3",
    storageBucket: "fireblogz-5b9f3.appspot.com",
    messagingSenderId: "121320132413",
    appId: "1:121320132413:web:14297dc84e401bded27f54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore()