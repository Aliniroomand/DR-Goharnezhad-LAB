import React from 'react';
//styles
import styles from './FirstPage.module.css'
//images
import adminSVG from "../assets/images/adminSVG.svg";
import Logo from '../assets/images/mainLoGO (1).png';

const FirstPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.adminpart}>
                <div>
                <img src={adminSVG} alt='adminsvg'/>
                <p>ورود مدیر سایت</p>
                </div>
                <div>
                <img src={Logo} alt='Site logo'/>
                <p>برای ورود به سایت اینجا کلیک کنید</p>
                </div>
            </div>
            <div>
                <p>برای دیدن جواب آزمایش اینجا کلیک کنید</p>
            </div>
        </div>
    );
};

export default FirstPage;