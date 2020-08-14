import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDKbwCuhy9fi8fELARXzZ3FRQ3RkKPbLUc',
  authDomain: 'carein-284214.firebaseapp.com',
  databaseURL: 'https://carein-284214.firebaseio.com',
  projectId: 'carein-284214',
  storageBucket: 'carein-284214.appspot.com',
  messagingSenderId: '378976790564',
  appId: '1:378976790564:web:6c9c3841d12eead07d50b1',
  measurementId: 'G-FMWVNR1K7Y'
};

const firebase = Firebase.initializeApp(config);

export default firebase;
