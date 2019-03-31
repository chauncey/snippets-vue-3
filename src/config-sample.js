// Initialize Firebase
import Firebase from 'firebase';

const config = {
  apiKey: 'YOUR API KEY'
  authDomain: 'YOUR AUTH DOMAIN'
  databaseURL: 'YOUR DATABASE URL'
  projectId: 'YOUR PROJECT ID'
  storageBucket: 'YOUR STORAGE BUCKET'
  messagingSenderId: 'YOUR MESSAGING SENDER ID',
};

const app = Firebase.initializeApp(config);
const db = app.database();
const snippetsRef = db.ref();

export default snippetsRef;
