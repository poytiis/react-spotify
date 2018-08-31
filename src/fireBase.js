import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8LWRgDoWy1CWxI7jT2-DD0WGkOyWwmXE",
    authDomain: "react-spotify-b66da.firebaseapp.com",
    databaseURL: "https://react-spotify-b66da.firebaseio.com",
    projectId: "react-spotify-b66da",
    storageBucket: "react-spotify-b66da.appspot.com",
    messagingSenderId: "554031963857"
};
firebase.initializeApp(config);
const fireBase=firebase.database.ref('/songs');

export default fireBase;