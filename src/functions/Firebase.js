import firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from './../config';
import CONSTANTS from './../constants';

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
    this.collectionReference = firebase.firestore().collection(CONSTANTS.FIREBASE.USERS_COLLECTION);
  }

  async signUp(email, name, phone, password) {
    return await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((loggedUser) => {
        const userData = this.collectionReference.doc(loggedUser.user.uid);
        userData.set({
          name: name,
          phone: phone,
        });
      });
  }

  async signIn(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  async getUserData(onSuccessFunction) {
    return await this.collectionReference
      .doc(this.auth.currentUser.uid).get()
      .then(onSuccessFunction);
  }
}

export default new Firebase();
