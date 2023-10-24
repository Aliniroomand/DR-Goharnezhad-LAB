import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCDKPE9ufTTyrHz9PhoHT0AKtnd0j5GDr0",
    authDomain: "dr-goharnezhad-lab.firebaseapp.com",
    projectId: "dr-goharnezhad-lab",
    storageBucket: "dr-goharnezhad-lab.appspot.com",
    messagingSenderId: "618520794474",
    appId: "1:618520794474:web:4a67313990ef3fb02e8113"
  };
  const app = initializeApp(firebaseConfig);
  export const storage= getStorage(app);
  export const db=getFirestore(app)