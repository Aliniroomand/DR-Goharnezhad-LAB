import React from 'react';
//styles
import styles from './ResultsList.module.css'
import Result from './Result';
const ResultsList = ({props}) => {
console.log(FormData);

    return (
        <div className={styles.container}>
            {
                // (codeMelli === "") || (shomareGhabz=== "") ?
                // <h1>چجور توقع داری بدون دونستن شماره قبض  و کدملی برات جواب رو بیارم ؟؟</h1>
                // :
                <Result/>
            }
        </div>
    );
};

export default ResultsList;