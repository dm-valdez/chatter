import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCd-J5YxpULnlm2nk-VXrB8PVv9k1FtalY",
    authDomain: "chatter-1f362.firebaseapp.com",
    projectId: "chatter-1f362",
    storageBucket: "chatter-1f362.appspot.com",
    messagingSenderId: "605153113284",
    appId: "1:605153113284:web:d2a0e83119564ac2c74591"
  }).auth();