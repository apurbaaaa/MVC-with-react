import React, { useEffect, useState } from "react";

function OpenJournal(){

    useEffect(() => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const getData = async () => {
           try{
            const response = await axios.get({/* Whatever URL */})
            {/* definitions */}
           } 
           catch(err){
            console.log(err);
            console.log("error getting")
           }
        }
    })

    return(
        <div>
            
        </div>
    );

}

export default OpenJournal;