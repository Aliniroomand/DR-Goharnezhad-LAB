import React , { useContext, useEffect, useState }  from 'react';
//images
import document from '../assets/images/document.svg'
import Delete from "../assets/images/delete.svg"
//styles
import styles from './Result.module.css'
//helper
import { supabase } from './supabaseClient';

const Result = ({resultData}) => {
const{id,codemelli,shomareghabz,time,file}=resultData;
    const deleteResult= async ()=>{
        // try{
        //     const{data,error}=await supabase
        //     .from("results")
        //     .insert({
        //         shomareghabz:formData.shomareGhabz,
        //         codemelli:formData.codeMelli,
        //         pdf_file:[],
        //     }).single()
        //     console.log(data);
        //     if(error) throw error;
        //     window.location.reload()
        // }catch(error){
        //     alert(error.message)
        // }
    
    }
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button onClick={deleteResult}>
                    <img src={Delete} alt='delete'/>
                    <p>حذف</p>
                </button>
            </div>
            <div>
                <p>
                    {`کدملی:${codemelli}`}
                </p>
                <p>
                    {`شماره قبض: ${shomareghabz}`}
                </p>
                <p>
                   {` تاریخ بارگذاری : ${time}`}
                </p>
            </div>
            <div className={styles.download}>
            <button >
                    <img src={document} alt='document'/>
                    <p>دانلود آزمایش</p>
                </button>
            </div>
        </div>

    );
};

export default Result;