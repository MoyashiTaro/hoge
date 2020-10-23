import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        authDomain: "xxxxxxxxxxxxxxxx.firebaseapp.com",
        databaseURL: "https://xxxxxxxxxxxxxxxx.firebaseio.com",
        projectId: "hogekutikomi",
        storageBucket: "xxxxxxxxxxxxxxxx.appspot.com",
        messagingSenderId: "xxxxxxxxxxxxx",
        appId: "x:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx"
    }
  )
}

export default firebase