import Vue from 'vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import dotenv from 'dotenv'
dotenv.config()

Vue.use(firestorePlugin);

export const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
export const db = firebase
	.initializeApp(firebaseConfig)
	.firestore()
