import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAbnJnw0MP9DyXBjjq6R566Ks-xhCOitAg",
  authDomain: "react-native-project-650ee.firebaseapp.com",
  databaseURL: "https://react-native-project-650ee.firebaseio.com",
  projectId: "react-native-project-650ee",
  storageBucket: "react-native-project-650ee.appspot.com",
  messagingSenderId: "93709359596"
};

export default class Firebase {
  static firestore: firebase.firestore.Firestore;
  static auth: firebase.auth.Auth;
  static storage: firebase.storage.Storage;

  static init() {
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
    Firebase.firestore = firebase.firestore();
    Firebase.storage = firebase.storage();
  }
}
