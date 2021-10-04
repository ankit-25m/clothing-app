import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
  apiKey: 'AIzaSyAYul0mk0s-E6hnuJiAbLp5VUuQk49OHRU',
  authDomain: 'clothing-db-3e86a.firebaseapp.com',
  projectId: 'clothing-db-3e86a',
  storageBucket: 'clothing-db-3e86a.appspot.com',
  messagingSenderId: '1008585360812',
  appId: '1:1008585360812:web:b87f2fe13a03b79ff2e609',
  measurementId: 'G-T6EF86WNZR',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error while creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
