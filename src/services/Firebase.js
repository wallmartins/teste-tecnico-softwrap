import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCLKHagt9aUGJ--EOxqnkaO4NDOHNot314',
  authDomain: 'dev-softwrap.firebaseapp.com',
  projectId: 'dev-softwrap',
  storageBucket: 'dev-softwrap.appspot.com',
  messagingSenderId: '562409644162',
  appId: '1:562409644162:web:ba55b8534b55edeeb1949b',
};

firebase.initializeApp(config);

export default firebase;
