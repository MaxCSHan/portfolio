import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyASrwJNNz6HQSSO7iOI98G_TBFLxWq8ppI',
    authDomain: 'lechat-15f79.firebaseapp.com',
    databaseURL: 'https://lechat-15f79.firebaseio.com',
    projectId: 'lechat-15f79',
    storageBucket: 'lechat-15f79.appspot.com',
    messagingSenderId: '857926942591',
    appId: '1:857926942591:web:0168ee0055a0778453e44a',
    measurementId: 'G-NSQ4NP0RLT'
  }

 firebase.initializeApp(firebaseConfig)

const db = firebase.database()

export{db}
