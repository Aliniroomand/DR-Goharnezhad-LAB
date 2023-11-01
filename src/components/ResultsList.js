import React, { useContext } from 'react';
//styles
import styles from './ResultsList.module.css'
import Result from './Result';
import {ResultsContext} from '../context/ResultsContextProvider';

const ResultsList = () => {
    const allOfResults=useContext(ResultsContext)
    //for access to time and give it to time stamp

    return (
        <div className={styles.container}>
            {
                allOfResults.map(result=>
                <Result 
                    key={result.id}
                    resultData={result}
                    />



                )
                
            }
        </div>
    );
};

export default ResultsList;