import {useEffect, useState} from 'react';

const useFetch = (page) => {

    const[Data ,setData] = useState();
    useEffect(() => {
        
        const url="https://www.themuse.com/api/public/jobs?category=Software%20Engineer&page=1";

        const Fetchdata = async () => {

            const response = await fetch(url);
            const getdata = await response.json();
            setData(getdata);
           
        };

        Fetchdata();
     
    }, [page])

    return Data;
}
 
export default useFetch;