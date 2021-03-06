import firebase from 'firebase/app'; //should use firebase because it is a keyword
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnxfdgL0HM6PdLZM6t12AiYEPkj_wg-gE",
    authDomain: "crwn-db-8998b.firebaseapp.com",
    databaseURL: "https://crwn-db-8998b.firebaseio.com",
    projectId: "crwn-db-8998b",
    storageBucket: "",
    messagingSenderId: "420850540733",
    appId: "1:420850540733:web:38e3d46d774430e9"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return; //if user is not signed in

      const userRef = firestore.doc(`users/${userAuth.uid}`); //checking if user exists in db

      const snapShot = await userRef.get();

      if(!snapShot.exists) { // exists tells is there a user in db by returning true or false, if user is not there in db then create it
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
      }
      console.log(userRef);
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth(); // we need it for authentication
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account'}); //it will open pop up for google sign-in for authentication and sign-in
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;