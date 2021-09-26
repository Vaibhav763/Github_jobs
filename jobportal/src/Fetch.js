import React, {useEffect, useState} from 'react';
import Portal from './Portal'
const Fetch = () => {

    const[Data ,setData] = useState();
    useEffect(() => {
        
        const url="https://www.themuse.com/api/public/jobs?category=Software%20Engineer&page=1";

        const Fetchdata = async () => {

            const response = await fetch(url);
            const getdata = await response.json();
            setData(getdata);
           
        };

        Fetchdata();
     
    }, [])

    return ( 
        <>
        <h1>Hello</h1>
        <Portal data={Data}/>
        </>
     );
}
 
export default Fetch;