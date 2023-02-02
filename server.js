import express from 'express';
const app = express();
const router = express.Router();
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from './firebase.js';
import { collection, getDocs, getFirestore, orderBy, query, limit } from 'firebase/firestore';

const getResults = () => {
  return new Promise(() => {
    const db =  getFirestore();
    const resultsCollection = query(collection(db, "results"), orderBy("date", "desc"), limit(5));
    
    
    console.log(resultsCollection)
  })
  
}

initializeApp(firebaseConfig);

app.use(express.json());
app.use('', router);
router.use(express.urlencoded({ extended: true }));

app.get('/', (request, response)=>{
  response.send("The best app");
})



app.listen(8080, () => console.log('Server Running'))