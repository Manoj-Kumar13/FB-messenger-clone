import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({

     // FIREBASE PROJECT CONFIG

});

const db=firebaseApp.firestore()

export default db;
