import React, { useEffect, useState } from 'react';
//style
import styles from './AdminPage.module.css'

//images
import doctorImage from '../assets/images/doctor (2).png'
//components
import Result from './Result';
import AnimatedPages from './AnimatedPages';
import { supabase } from './supabaseClient';
//helper
import { Validation } from '../helper/Validation';
import { toast } from 'react-toastify';
import ResultsList from './ResultsList';
//storage

const AdminPage = () => {

// search Part
    const[serached,setSearched]=useState({
        codeMelli:"",
        shomareGhabz:""
    });
    const searchChangeHandler = (event)=>{
        setSearched({...serached,[event.target.name]:event.target.value })
    }

//rest
    const[errors,setErrors]=useState("")
    const [touched,setTouched]=useState(false);
    const [formData,setFormData]=useState({
        shomareGhabz:"",
        codeMelli:"",
        // file:{},
        time:""
    })

    const focusHandler=(e)=>{
        setTouched({...touched,[e.target.name]:true})
    }
    const uploadChangeHandler=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})

    }
    const uploadFileHandler=(e)=>{
        setFormData({...formData,file:e.target.files[0]})
    }
        //for access to time and give it to time stamp
        let today = new Date();
        let date = `${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`
        let time = `${today.getHours() } : ${today.getMinutes()} : ${today.getSeconds()}`;
        let dateTime = `تاریخ : ${date}  ساعت :${time}`;


    const submitUploadingHandler=async (event)=>{
        event.preventDefault();
            try{
                const{data,error}=await supabase
                .from("results")
                .insert({
                    shomareghabz:formData.shomareGhabz,
                    codemelli:formData.codeMelli,
                    // pdf_file:[],
                    time:dateTime,

                }).single()
                if(error) throw error;
                window.location.reload()
            }catch(error){
                alert(error.message)
            }
        
    }
    useEffect(()=>{
        setErrors(Validation(formData,"uploadForm"))
    },[formData])

    return (
        <AnimatedPages>
        <div className={styles.container}>
            <div className={styles.uploadContainer}>
                <h1>بارگذاری جواب آزمایش</h1>
                <label htmlFor='codeMelli'>کد ملی فرد رو اینجا وارد کنید:</label>             
                <input    
                    placeholder="کد ملی فرد"
                    type="text" 
                    name="codeMelli"
                    value={formData.codeMelli} 
                    onChange={uploadChangeHandler} 
                    onFocus={focusHandler}
                    />
                    {errors.codeMelli && touched.codeMelli && <span>{errors.codeMelli}</span>}
                <label htmlFor='shomareGhabz'>شماره قبض رو اینجا وارد کنید:</label>             
                <input    
                    placeholder="شماره قبض"
                    type="text" 
                    name="shomareGhabz"
                    value={formData.shomareGhabz} 
                    onChange={uploadChangeHandler} 
                    onFocus={focusHandler}
                />
                    {errors.shomareGhabz && touched.shomareGhabz && <span>{errors.shomareGhabz}</span>}
                <label htmlFor='result'>فایل جواب آزمایش رو اینجا آپلود کنید</label>             
                <input    
                type="file" 
                name="file"
                value={formData.file} 
                onChange={uploadFileHandler} 
                onFocus={focusHandler}
                />
                    {errors.file && touched.file && <span>{errors.file}</span>}
                <button type="submit" onClick={submitUploadingHandler}>
                    ذخیره
                </button>
            </div>
            <div className={styles.imageContainer}>
                <h1>سلام و خداقوت!</h1>
                <img src={doctorImage} alt='doctor'/>
            </div>
            <div className={styles.resultsContainer}>
                <div className={styles.searchBox}>
                    <h1>جستجوی قبض</h1>
                    <label>کد ملی :</label>
                    <input 
                    type='text'
                    name='codeMelli'
                    value={serached.codeMelli}
                    placeholder='کد ملی'
                    onChange={searchChangeHandler}
                    onFocus={focusHandler}
                    />
                    <label>شماره قبض</label>
                    <input 
                    type='text'
                    name='shomareGhabz'
                    value={serached.shomareGhabz}
                    placeholder='شماره قبض'
                    onChange={searchChangeHandler}
                    onFocus={focusHandler}
                    />
                    <button>
                        جستجو
                    </button>
                </div>
                <div className={styles.resultsBox}>
                    <ResultsList />
                </div>
            </div>
        </div>
                    </AnimatedPages>
    );
};

export default AdminPage;