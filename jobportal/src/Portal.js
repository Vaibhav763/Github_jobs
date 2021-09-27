import React,{useState} from 'react';
import { Container } from 'react-bootstrap';

import useFetch from './useFetch';
import JobsPagination from './JobsPagination';
import JobCard from './JobCard';
import SearchForm from './SearchForm';


const Portal = () => {
    const [type, setType] = useState('Software%20Engineer');
    const [level, setLevel] = useState({});
    const [page, setPage] = useState(1);
    

    const { error, isPending, data} = useFetch('https://www.themuse.com/api/public/jobs?category='+ type
    + '&level=' + level + '%2C%20India'                                       
    + '&page=' + page)
   
    function handleTypeChange(e) {
        console.log(e);
       
        const value = e.target.value
        setPage(1)
        setType(value)
        
        }

    return (  
     <Container className="my-4">
        <h1 className="mb-4">Jobs Portal</h1>

        { error && <div> <h1>{ error } </h1></div> }
        { isPending && <div> <h1>Loading...</h1></div> }

        <SearchForm data={data} onTypeChange={handleTypeChange} /> 
        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 

        {data && data.results.map(job => {
            return <JobCard key={job.id} job={job} />
        })}
       
        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 
    </Container>
    );
}
 
export default Portal;