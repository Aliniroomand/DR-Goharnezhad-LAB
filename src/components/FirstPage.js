import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './FirstPage.module.css'
//images
import adminSVG from "../assets/images/adminSVG.svg";
import Logo from '../assets/images/mainLoGO (1).png';
import desktop_BG from '../assets/images/desktop BG (1).jpg';
import mobile_BG from '../assets/images/mobile-BG (2).jpg'

const FirstPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.options_part}>
                
                <Link to='/adminPage' className={styles.admin_part}>
                <img src={adminSVG} alt='adminsvg'/>
                <p>ورود مدیر سایت</p>
                </Link>

                <Link to='/site' className={styles.enterance_site}>
                <img src={Logo} alt='Site logo'/>
                <p>برای ورود به وبلاگ<br></br>اینجا کلیک کنید</p>
                </Link>
            </div>
            <Link to='/results' className={styles.answers}>
            </Link>
         <img src={desktop_BG} alt='bg' className={styles.desktop_BG}/>
         <img src={mobile_BG} alt='bg' className={styles.mobile_BG}/>
        </div>
    );
};

export default FirstPage;