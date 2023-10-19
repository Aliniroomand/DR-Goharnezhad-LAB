import React , { useState ,useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from '../assets/toast';
import { Link } from 'react-router-dom';
import{ Validation } from '../helper/Validation.js'
//styles
import styles from './AdminLoginPage.module.css'


const AdminLoginPage = () => {
    const [data,setData]=useState({
        username:"",
        password:"",
    })

    const changeHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value })
    }
        
    
const[ errors , setErrors] = useState({}) ;
const[touched,setTouched]= useState({});

useEffect( ()=>{
    setErrors(Validation(data,"AdminLogin"))
} ,[data,touched])

    const focusHandler = event=>{
        setTouched({...touched, [event.target.name]:true})
    }
    
    const submitHandler = event=>{
        event.preventDefault();
        if (!Object.keys(errors).length) 
            {notify("هردو درست بود،تا 3 بشماری وارد صفحه ادمین میشی","success")}
        else{ notify("اطلاعات رو متاسفانه درست وارد نکردی ","error")
            setTouched({
            username:true,
            password:true,
        })}
    }


    return (
        <div className={styles.container}>
        <h1>لطفا نام کاربری و پسورد رو وارد کنید</h1>
    <form onSubmit={submitHandler}>
        
        <label>نام کاربری:</label> 
        <input 
            className={errors.username && touched.username ? styles.inputError : styles.correctInput}
            placeholder='نام کاربری رو اینجا بنویس'
            type="text" 
            name="username" 
            value={data.username} 
            onChange={changeHandler} 
            onFocus={focusHandler}

        />
            {errors.username && touched.username && <span>{errors.username}</span>}
        <label>رمز عبور:</label>
        <input 
            className={ touched.password && errors.password ? styles.inputError : styles.correctInput}
            placeholder='رمز عبور رو هم اینجا وارد کن'
            type="password" 
            name="password" 
            value={data.password} 
            onChange={changeHandler} 
            onFocus={focusHandler}

        />
            {errors.password && touched.password && <span>{errors.password}</span>}
        <div className={styles.buttons}>
            <button type="submit" className={Object.keys(errors).length ? styles.redButton: styles.greenButton}>submit</button>
        </div >
        <div><Link to="./firstpage">بازگشت</Link></div>
    </form>
            <ToastContainer />
    </div>
);
};

export default AdminLoginPage;