import Rebase from  're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCP2glBN-TXOA5u5lIrIBqoRw4nTw9d0LM",
  authDomain: "catch-of-the-day-lak0sta.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-lak0sta.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;