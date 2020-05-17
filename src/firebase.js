import firebase from 'firebase'

const config={
    apiKey: "AIzaSyDDWZXlRCmPDbw8t39unlfdtW12IN-ThTI",
        authDomain: "scoutingapplication-bb715.firebaseapp.com",
        databaseURL: "https://scoutingapplication-bb715.firebaseio.com",
        projectId: "scoutingapplication-bb715",
        storageBucket: "scoutingapplication-bb715.appspot.com",
        messagingSenderId: "127710432787",
        appId: "1:127710432787:web:ef902bd3782ca4cecab9e6"
}
const Firebase = firebase.initializeApp(config);

export default Firebase;