import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDWC-Kks87_FE0kLmyWfUhDbByG8VUdPrg',
	authDomain: 'fb-clone-6b9d7.firebaseapp.com',
	projectId: 'fb-clone-6b9d7',
	storageBucket: 'fb-clone-6b9d7.appspot.com',
	messagingSenderId: '595946826972',
	appId: '1:595946826972:web:b86ecade6796183495d819'
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
