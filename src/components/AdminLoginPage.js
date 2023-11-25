import React , { useState ,useEffect } from 'react';
import {notify} from '../assets/toast';
import { ToastContainer} from 'react-toastify';
import { Link , useNavigate } from 'react-router-dom';
import{ Validation } from '../helper/Validation.js'
//styles
import styles from './AdminLoginPage.module.css'
//components
import AnimatedPages from './AnimatedPages';
// images
import wavesBG from '../assets/images/layered-waves-haikei (3) (1).png'




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
} ,[data])

    const focusHandler = event=>{
        setTouched({...touched, [event.target.name]:true})
    }
    
    const navigate= useNavigate();
        
    
    const submitHandler = event=>{
        event.preventDefault();
        
        if (!Object.keys(errors).length) {
            notify("اطلاعات درست بود،الان وارد صفحه میشیم!","success");
            navigate('/adminPage')}

        else{ notify("اطلاعات رو متاسفانه درست وارد نکردی ","error")
            setTouched({
            username:true,
            password:true,
        })}
    }


    return (
        <AnimatedPages>

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
            <button type="submit" className={Object.keys(errors).length > 0 ? styles.redButton: styles.greenButton}>ورود</button>
            <Link to="./firstpage">بازگشت</Link>
        </div>
    </form>
            <ToastContainer />
          <h4 style={{textAlign:"center",fontSize:"1.1rem"}}>رمز عبور و نام کاربری برای تست :<br/> aliniroomand</h4>
            <img src={wavesBG} className={styles.wavesBG1} alt='layerd waves'/>
    </div>
    </AnimatedPages>

);
};

export default AdminLoginPage;