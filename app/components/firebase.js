import * as firebase from "firebase";

class Firebase {
  static initialise() {
    if (firebase.apps.length) return
    firebase.initializeApp({
      apiKey: "AIzaSyD3JqkfOV0lvbXgITPhXkodMQ8Qygka2wU",
      authDomain: "elo7test-ca78e.firebaseapp.com",
      databaseURL: "https://elo7test-ca78e.firebaseio.com",
      projectId: "elo7test-ca78e",
      storageBucket: "elo7test-ca78e.appspot.com",
      messagingSenderId: "1070054749055"
    });
  }

  static async loadData() {
    return firebase.database().ref("data").once("value")
      .then((snapshot) => {
        return snapshot.val();
      })
  }
}

module.exports = Firebase;
