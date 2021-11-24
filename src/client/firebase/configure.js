import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import config from './config';

const configuration = {
  apiKey: config.FIREBASE_APP_API_KEY,
  authDomain: config.FIREBASE_APP_AUTH_DOMAIN,
  projectId: config.FIREBASE_APP_PROJECT_ID,
  storageBucket: config.FIREBASE_APP_STORAGE_BUCKET,
};

export function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configuration);
  }

  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const firestore = firebase.firestore();

  /**
   * Connect to firestore emulator if running locally
   */
  if (window.location.hostname === 'localhost') {
    firestore.settings({
      host: 'localhost:8080',
      ssl: false,
    });
  }

  return {
    auth,
    googleProvider,
    firestore,
  };
}
