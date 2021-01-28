import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({

      apiKey: "AIzaSyDqg2VAg1QvJ7SIKdTuvyUExZAILwS5_xA",
      authDomain: "fb-messenger-clone-a0b65.firebaseapp.com",
      databaseURL: "https://fb-messenger-clone-a0b65.firebaseio.com",
      projectId: "fb-messenger-clone-a0b65",
      storageBucket: "fb-messenger-clone-a0b65.appspot.com",
      messagingSenderId: "56364315165",
      appId: "1:56364315165:web:b5ec1b477c2e4d6ac68cf4",
      measurementId: "G-C6F4QTW0L2"

});

const db=firebaseApp.firestore()

export default db;