import React, { useEffect, useState } from 'react';
//style
import styles from './AdminPage.module.css'

//images
import doctorImage from '../assets/images/doctor (2).png'
//components
import Results from './Results';
import { Timestamp,collection,addDoc } from 'firebase/firestore';
import AnimatedPages from './AnimatedPages';
//helper
import { Validation } from '../helper/Validation';
//storage
import { ref, uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { storage , db} from '../firebaseConfig';
import { toast } from 'react-toastify';

const AdminPage = () => {

// search Part
    const[serached,setSearched]=useState({
        codeMelli:"",
        shomareGhabz:""
    });
    useEffect((event)=>{

    },[serached])
    
    const searchChangeHandler = (event)=>{
        setSearched({...serached,[event.target.name]:event.target.value })
    }
// Upload part
    const [formData,setForamData]=useState({
        codeMelli:"",
        shomareGhabz:"",
        file:"",
        uploadedAt:Timestamp.now().toDate(),
    })

    const uploadChangeHandler=(event)=>{
        setForamData({...formData,[event.target.name]:event.target.value})

    }
    const uploadFileHandler=(e)=>{
        setForamData({...formData,file:e.target.files[0]})
    }
    const handleSave=()=>{
    }
//rest
    const[errors,setErrors]=useState("")
    const [touched,setTouched]=useState(false);
    const focusHandler=(e)=>{
        setTouched({...touched,[e.target.name]:true})
    }
    useEffect(()=>{
        setErrors(Validation(formData,"uploadForm"))
    },[formData])
//storage
const [progress,setProgress]=useState(0);
const storageRef=ref(storage,`/Results/${Date.now()}/${formData.shomareGhabz}`);
const uploadFile= uploadBytesResumable(storageRef,formData.file)
uploadFile.on("state_changed",
(snapshot)=>{
    const progressPercent=Math.round(snapshot.bytesTransferred/snapshot.totalBytes * 100);
    setProgress(progressPercent);
},
(err)=>{
    setForamData({
        shomareGhabz:"",
        codeMelli:"",
        file:"",
    });
    getDownloadURL(uploadFile.snapshot.ref)
    .then((url)=>{
        const articleRef = collection(db,"results");
        addDoc(articleRef,{
            codeMelli:formData.codeMelli,
            shomareGhabz:formData.shomareGhabz,
            fileUrl:url,
            uploadedAt:Timestamp.now().toDate(),
        })
        .then(()=>{
            toast("آپلود با موفقیت انجام شد",{type:"success"});
            setProgress(0)
        })
        .catch(err=>{
            toast("خطا در بارگذاری",{type:"error"})
        })
    })

}
)

    return (
        <AnimatedPages>
        <div className={styles.container}>
            <div className={styles.uploadContainer}>
                <h1>بارگذاری جواب آزمایش</h1>
                <label htmlFor='codeMelli'>کد ملی فرد رو اینجا وارد کنید:</label>             
                <input    
                    placeholder="کد ملی فرد"
                    type="text" 
                    name="codeMelli"
                    value={formData.codeMelli} 
                    onChange={uploadChangeHandler} 
                    onFocus={focusHandler}
                    />
                    {errors.codeMelli && touched.codeMelli && <span>{errors.codeMelli}</span>}
                <label htmlFor='shomareGhabz'>شماره قبض رو اینجا وارد کنید:</label>             
                <input    
                    placeholder="شماره قبض"
                    type="text" 
                    name="shomareGhabz"
                    value={formData.shomareGhabz} 
                    onChange={uploadChangeHandler} 
                    onFocus={focusHandler}
                />
                    {errors.shomareGhabz && touched.shomareGhabz && <span>{errors.shomareGhabz}</span>}
                <label htmlFor='result'>فایل جواب آزمایش رو اینجا آپلود کنید</label>             
                <input    
                type="file" 
                name="file"
                value={formData.file} 
                onChange={uploadFileHandler} 
                onFocus={focusHandler}
                />
                    {errors.file && touched.file && <span>{errors.file}</span>}
                {/* progress bar */}
                <div >
                    <div className={styles.uploadinProgress} style={{width:'50%'}}>
                        50%
                    </div>
                <button className={styles.uploadButton} onClick={handleSave}>ذخیره</button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <h1>سلام و خداقوت!</h1>
                <img src={doctorImage} alt='doctor'/>
            </div>
            <div className={styles.resultsContainer}>
                <div className={styles.searchBox}>
                    <h1>جستجوی قبض</h1>
                    <label>کد ملی :</label>
                    <input 
                    type='text'
                    name='codeMelli'
                    value={serached.codeMelli}
                    placeholder='کد ملی'
                    onChange={searchChangeHandler}
                    onFocus={focusHandler}
                    />
                    <label>شماره قبض</label>
                    <input 
                    type='text'
                    name='shomareGhabz'
                    value={serached.shomareGhabz}
                    placeholder='شماره قبض'
                    onChange={searchChangeHandler}
                    onFocus={focusHandler}
                    />
                    <button>
                        جستجو
                    </button>
                </div>
                <div className={styles.resultsBox}>
                    <Results />
                </div>
            </div>
        </div>
                    </AnimatedPages>
    );
};

export default AdminPage;