import React , { useState ,useEffect } from 'react';
import {notify} from '../assets/toast';
import { ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';
//helper
import{ Validation } from '../helper/Validation.js'
//components
import AnimatedPages from './AnimatedPages';
import Result from './Result';
//styles
import styles from './ResultsLoginPage.module.css'

const Results = () => {
const [data,setData]=useState({
    codeMelli:"",
    shomareGhabz:""
});

const changeHandler=(event)=>{
    setData({...data,[event.target.name]:(event.target.value)})
}


const[touched,setTouched]=useState({})
const focusHandler=(event)=>{
    setTouched({...touched,[event.target.name]:true})
}

const[errors,setErrors]=useState({})
useEffect(()=>{
    setErrors(Validation(data,"customerLogin"))
},[data])

const submitHandler=(event)=>{
    event.preventDefault();
    if(Object.keys(errors).length){ 
    notify("اطلاعات رو بادقت وارد کنید ","error")
     setTouched({
     codeMelli:true,
     shomareGhabz:true,
})}else{
    notify("در حال جستجوی جواب","success");



}
}

    return (
    <>
    <AnimatedPages>
        <div className={styles.mainContainer}>
            <div className={styles.inputsContainer}>
                <form onSubmit={submitHandler}>
                
                    <label>کدملی:</label> 
                    <input 
                        className={errors.codeMelli && touched.codeMelli ? styles.inputError : styles.correctInput}
                        placeholder='کدملی رو اینجا وارد کنید '
                        type="text" 
                        name="codeMelli" 
                        value={data.codeMelli} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.codeMelli && touched.codeMelli && <span>{errors.codeMelli}</span>}
                    <label>شماره قبض:</label>
                    <input 
                        className={ touched.shomareGhabz && errors.shomareGhabz ? styles.inputError : styles.correctInput}
                        placeholder='شماره قبض رو اینجا وارد کنید'
                        type="text" 
                        name="shomareGhabz" 
                        value={data.shomareGhabz} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.shomareGhabz && touched.shomareGhabz && <span>{errors.shomareGhabz}</span>}
                    <div className={styles.buttons}>
                        <button onClick={submitHandler}type="submit" className={Object.keys(errors).length > 0 ? styles.redButton: styles.greenButton}>ورود</button>
                        <Link to="./firstpage">بازگشت</Link>
                    </div>
                </form>
                    <ToastContainer />
            </div>
            <div className={styles.resultsContainer}>
                <Result/>
            </div>
        </div>
    </AnimatedPages>
    </>
);
};

export default Results;