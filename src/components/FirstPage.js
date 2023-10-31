import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './FirstPage.module.css'
//images
import adminSVG from "../assets/images/adminSVG.svg";
import web from '../assets/images/web.svg';
import desktop_BG from '../assets/images/desktop BG (1).jpg';
import mobile_BG from '../assets/images/mobile-BG (2).jpg'
import AdminLoginPage from './AdminLoginPage';
import AnimatedPages from './AnimatedPages';
const FirstPage = () => {
    return (
        <>
        <AnimatedPages>
        <div className={styles.container}>
            <div className={styles.options_part}>
                
                <Link to='/adminloginpage' className={styles.admin_part}>
                <img src={adminSVG} alt='adminsvg'/>
                <p>ورود همکاران</p>
                </Link>

                <Link to='/site' className={styles.enterance_site}>
                <img src={web} alt='web'/>
                <p>ورود به وبلاگ</p>
                </Link>
            </div>
            <Link to='/resultLoginPage' className={styles.answers}>
         <img src={mobile_BG} alt='bg' className={styles.mobile_BG}/>
         <img src={desktop_BG} alt='bg' className={styles.desktop_BG}/>
            </Link>
        </div>
        {/* <AdminLoginPage className={styles.AdminLoginPage}/> */}
        </AnimatedPages>
        </>
    );
};

export default FirstPage;