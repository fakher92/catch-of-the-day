import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCyYls26b0viC8wEFm32Feo9wH-CL_FcDI",
  authDomain: "catch-of-the-day-d6afe.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d6afe.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;