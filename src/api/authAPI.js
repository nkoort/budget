import { db } from './api';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const authAPI = {
  async login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {});
  },

  async getAuth(setAuth) {
    const auth = getAuth();
    let a = null;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(user);
      } else {
        setAuth('user not found');
      }
    });
    return a;
  },

  async register(email, password) {},
};
