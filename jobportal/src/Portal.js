import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import useFetch from './useFetch';

const Portal = () => {
    const [page, setPage] = useState(1);
    
    const { error, isPending, data} = useFetch('https://www.themuse.com/api/public/jobs?page=' + page, page)

    return (  
     <Container className="my-4">
        <h1 className="mb-4">Jobs Portal</h1>

        { error && <div> <h1>{ error } </h1></div> }
        { isPending && <div> <h1>Loading...</h1></div> }

        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 

        {data && data.results.map(job => {
            return <Job key={job.id} job={job} />
        })}
       
        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 
    </Container>
    );
}
 
export default Portal;