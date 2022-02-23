import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApWIKEU9fXmELETXYHvr2cdDw1N0xNZcw",
  authDomain: "crwn-db-9835a.firebaseapp.com",
  projectId: "crwn-db-9835a",
  storageBucket: "crwn-db-9835a.appspot.com",
  messagingSenderId: "731458984777",
  appId: "1:731458984777:web:3eb30d7ec333b833f39898",
  measurementId: "G-E980D18M8Z",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
