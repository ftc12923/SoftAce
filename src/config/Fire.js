import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyCqpo099kBoLzYcReGOvINYYwMY3zmv0WI",
    authDomain: "softace-e82ef.firebaseapp.com",
    databaseURL: "https://softace-e82ef.firebaseio.com",
    projectId: "softace-e82ef",
    storageBucket: "softace-e82ef.appspot.com",
    messagingSenderId: "577942687286",
    appId: "1:577942687286:web:169e08394097fb1daa9297"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire; 