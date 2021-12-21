import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBiWu2-N84H2fA_5fVb1zSas6M_BThvX6g',
  authDomain: 'transpo-95a76.firebaseapp.com',
  projectId: 'transpo-95a76',
  storageBucket: 'transpo-95a76.appspot.com',
  messagingSenderId: '796271708422',
  appId: '1:796271708422:web:3355d25ddfa93a0bf93687',
  measurementId: 'G-E0C240YSRL',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
