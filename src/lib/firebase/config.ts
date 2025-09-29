// This file is intentionally left blank. 
// The Firebase configuration will be populated by the build process.
// In your local development, you would initialize Firebase here.

import { initializeApp, getApps, getApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "simon-styles-limited",
  "appId": "1:105541216160:web:3c8ba629e8745afca5e6c5",
  "apiKey": "AIzaSyAOd3j292aQ-YHLUo-ztX0ysF4iXuustDE",
  "authDomain": "simon-styles-limited.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "105541216160",
  // The storageBucket is not provided by the config service but is often needed.
  // It can usually be derived from the projectId.
  "storageBucket": "simon-styles-limited.appspot.com"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
