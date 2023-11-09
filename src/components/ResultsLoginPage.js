import React , { useState ,useEffect, useContext } from 'react';
import {notify} from '../assets/toast';
import { ToastContainer} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
//helper
import{ Validation } from '../helper/Validation.js'
//components
import AnimatedPages from './AnimatedPages';
import Result from './Result';
//styles
import styles from './ResultsLoginPage.module.css'
//context
import {ResultsContext} from '../context/ResultsContextProvider';

const Results = () => {
    const navigate=useNavigate();
    
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
        setImportedResults(wholeResults.filter(
            result=>(result.codemelli==data.codeMelli)
            && result.shomareghabz==data.shomareGhabz))
            
    }
}
const wholeResults=useContext(ResultsContext);
const [importedResults,setImportedResults]=useState([]);
const search = ()=>{
    setImportedResults(wholeResults.filter(
        result=>(result.codemelli==data.codeMelli)
        && result.shomareghabz.toLowerCase()==data.shomareGhabz.toLowerCase()))
        
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
                        <button onClick={submitHandler}type="submit" className={Object.keys(errors).length > 0 ? styles.redButton: styles.greenButton}>جستجوی جواب</button>
                        <button className={styles.backButton} onClick={()=>navigate(-1)} >بازگشت</button>
                    </div>
                </form>
                    <ToastContainer />
            </div>
            <div className={styles.resultsContainer}>

                <div className={styles.resultsBox}>
                {
                (importedResults.length)?
                    importedResults.map(r=><Result
                    key={r.id}
                    resultData={r}
                    className={styles.RESULT}
                    />)
                    :<>
                    <p className={styles.searchedTexts}>لطفا برای جستجو، شماره قبض و کد ملی را به درستی وارد کنید</p>
                    <p className={styles.searchedTexts} >وسپس دکمه جستجو را فشار دهید</p>
                    </>
                }
                </div>


            </div>
        </div>
    </AnimatedPages>
    </>
);
};

export default Results;