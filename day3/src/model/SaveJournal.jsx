import React, { useEffect } from "react";
import axios from "axios";

function SaveJournal(inputText, date){


    useEffect(()=>{
        const postData = async() =>{
            try{
                axios.post({/* Url */}, {
                    date: date,
                    inputText: inputText
                })
            }
            catch (err){
                console.log("Error posting Data")
                console.log(err);
            }

        };

        if(inputText && date){
            postData();
        }

    },[inputText, date])
    

}

export default SaveJournal;