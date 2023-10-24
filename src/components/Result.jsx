import React , { useEffect, useState }  from 'react';
import { collection, onSnapshot, orderBy ,query } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import document from '../assets/images/document.svg'
//styles
import styles from './Result.module.css'

const Result = () => {
    const [wholeResults,setWholeResults]=useState([]);
useEffect(()=>{
const resultsRef= collection(db,"results");
const q = query(resultsRef,orderBy("shomareGhabz","desc"));
onSnapshot(q,(snapshot)=>{
    const wholeResults=snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }));
    setWholeResults(wholeResults);
    })
},[])
    return (
        <div>
            { wholeResults.map(({shomareGhabz,codeMelli,uploadedAt,fileUrl,title})=>
            <div className={styles.container} key={shomareGhabz}>
                <div>
                    <img src={document} alt="document" />
                </div>
                <div className={styles.dataContainer}>
                    <h2>شماره قبض: {shomareGhabz}</h2>
                    <h2>کدملی: {codeMelli}</h2>
                    <p>تاریخ بارگذاری: {uploadedAt.toDate().toDateString()}</p>
                </div>
            </div>
            )}
        </div>
    );
};

export default Result;