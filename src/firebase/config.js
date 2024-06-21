import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGIN_SENDER_ID,
  VITE_APP_ID
} = import.meta.env

const app = initializeApp({
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGIN_SENDER_ID,
  appId: VITE_APP_ID
})

const db = getFirestore(app)

export default db