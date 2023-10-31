import React , { useContext, useEffect, useState }  from 'react';
//images
import document from '../assets/images/document.svg'
import Delete from "../assets/images/delete.svg"
//styles
import styles from './Result.module.css'
//context
import { ResultsContext } from '../context/ResultsContextProvider';

const Result = (props) => {
    const formData=useContext(ResultsContext);

    const deleteResult= async ()=>{
        try{
            const{data,error}=await supabase
            .from("results")
            .insert({
                shomareghabz:formData.shomareGhabz,
                codemelli:formData.codeMelli,
                pdf_file:[],
            }).single()
            if(error) throw error;
            window.location.reload()
        }catch(error){
            alert(error.message)
        }
    
    }
    console.log(result);
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button onClick={deleteResult}>
                    <img src={Delete}/>
                    <p>حذف</p>
                </button>
            </div>
            <div>
                <p>
                    {`کدملی:`}
                </p>
                <p>
                    {`شماره قبض:`}
                </p>
                <p>
                    تاریخ بارگذاری
                </p>
            </div>
            <div className={styles.download}>
            <button >
                    <img src={document}/>
                    <p>دانلود آزمایش</p>
                </button>
            </div>
        </div>

    );
};

export default Result;