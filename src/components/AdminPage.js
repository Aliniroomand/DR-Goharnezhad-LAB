import React from 'react';
//style
import styles from './AdminPage.module.css'

//images
import doctorImage from '../assets/images/doctor (2).png'
const AdminPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.uploadContainer}>
                <h1>بارگذاری جواب آزمایش</h1>
                <label htmlFor='codeMelli'>کد ملی فرد رو اینجا وارد کنید:</label>             
                <input    
                    // className={errors.username && touched.username ? styles.inputError : styles.correctInput}
                    placeholder="کد ملی فرد"
                    type="text" 
                    name="codeMelli"
                    // value={data.username} 
                    // onChange={changeHandler} 
                    // onFocus={focusHandler}
                />
                <label htmlFor='shomareGhabz'>شماره قبض رو اینجا وارد کنید:</label>             
                <input    
                    // className={errors.username && touched.username ? styles.inputError : styles.correctInput}
                    placeholder="شماره قبض"
                    type="text" 
                    name="shomareGhabz"
                    // value={data.username} 
                    // onChange={changeHandler} 
                    // onFocus={focusHandler}
                />
                <label htmlFor='result'>فایل جواب آزمایش رو اینجا آپلود کنید</label>             
                <input    
                // className={errors.username && touched.username ? styles.inputError : styles.correctInput}
                placeholder="شماره قبض"
                type="file" 
                name="result"
                // value={data.username} 
                // onChange={changeHandler} 
                // onFocus={focusHandler}
                
            />
            </div>
            <div className={styles.imageContainer}>
                <h1>سلام و خداقوت!</h1>
                <img src={doctorImage} alt='doctor'/>
            </div>
            <div className={styles.resultsContainer}>
                <h1>جستجوی قبض</h1>
                <input 
                    type='searchbox'
                />
                <button>
                    جستجو
                </button>
            </div>
        </div>
    );
};

export default AdminPage;