import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './FirstPage.module.css'
//images
import adminSVG from "../assets/images/adminSVG.svg";
import Logo from '../assets/images/mainLoGO (1).png';
import desktop_BG from '../assets/images/desktop BG (1).jpg';
import mobile_BG from '../assets/images/mobile-BG (2).jpg'
import AdminLoginPage from './AdminLoginPage';

const FirstPage = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.options_part}>
                
                <Link to='/adminloginpage' className={styles.admin_part}>
                <img src={adminSVG} alt='adminsvg'/>
                <p>ورود همکاران</p>
                </Link>

                <Link to='/site' className={styles.enterance_site}>
                <img src={Logo} alt='Site logo'/>
                <p>ورود به وبلاگ</p>
                </Link>
            </div>
            <Link to='/results' className={styles.answers}>
            </Link>
         <img src={desktop_BG} alt='bg' className={styles.desktop_BG}/>
         <img src={mobile_BG} alt='bg' className={styles.mobile_BG}/>
        </div>
        {/* <AdminLoginPage className={styles.AdminLoginPage}/> */}
        </>
    );
};

export default FirstPage;