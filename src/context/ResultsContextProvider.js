import React, { createContext, useEffect, useState } from 'react';
import {supabase} from '../components/supabaseClient'

export const ResultsContext=createContext();

const ResultsContextProvider = (props) => {
    const[results,setResults]=useState([]);

    useEffect(()=>{
         getResults() 
    
    },[])
  const getResults= async ()=>{
        try{
            const{data,error}=await supabase
            .from("results")
            .select("*")
            .limit(10)
            if(error) throw error;
            if(data != null){
                setResults(data);
            }
        }catch(error){
            alert(error.message)
        }
    }
    return (
        <ResultsContext.Provider value = {results}>
            {props.children}
        </ResultsContext.Provider>
    );
};

export default ResultsContextProvider;