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
   
    function handleTypeChange(e) {
        const value = e.target.value
        console.log(value)
        setType(value)
        setPage(1)   
    }

    function handleLevelChange(e) {
            const value = e.target.value
            console.log(value)
            setLevel(value)
            setPage(1)  
    }

    const { error, isPending, data} = useFetch('https://www.themuse.com/api/public/jobs?category='+ type
    + '&level=' + level                                     
    + '&page=' + page)

    return (  
     <Container className="my-4">
        <h1 className="mb-4">Jobs Portal</h1>

        { error && <div> <h1>{ error } </h1></div> }
        { isPending && <div> <h1>Fetching the Jobs</h1></div> }

        { data && <SearchForm data={data} onTypeChange={handleTypeChange} onLevelChange={handleLevelChange} /> }
        { data && <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> }

        {data && data.results.map(job => {
            return <JobCard key={job.id} job={job} />
        })}
       
       { data && <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> }
    </Container>
    );
}
 
export default Portal;