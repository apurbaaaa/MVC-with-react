import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


function useFetchData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try{
                const response = axios.get({/*url*/})
                setData(response.data);
            }
            catch(err) {
                setError(err);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [url]);//dependency array

    return { data, loading, error}

};

export default useFetchData;