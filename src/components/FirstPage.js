import React from 'react';
//styles
import styles from './FirstPage.module.css'
//images
import adminSVG from "../assets/images/adminSVG.svg";
import Logo from '../assets/images/mainLoGO (1).png';
import BG from '../assets/images/desktop BG (1).jpg';

const FirstPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.optionts_part}>
                <div className={styles.admin_part}>
                <img src={adminSVG} alt='adminsvg'/>
                <p>ورود مدیر سایت</p>
                </div>
                <div className={styles.enterance_site}>
                <img src={Logo} alt='Site logo'/>
                <p>برای ورود به سایت<br></br>اینجا کلیک کنید</p>
                </div>
            </div>
            <div className={styles.answers}>
                <p>برای دیدن جواب آزمایش<br/> اینجا کلیک کنید</p>
            </div>
         <img src={BG} alt='bg' className={styles.BG_image}/>
        </div>
    );
};

export default FirstPage;