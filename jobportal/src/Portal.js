import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import useFetch from './Fetch';

const Portal = () => {
    const [page, setPage] = useState(1);
    const data = useFetch(page);
    return (  
     <Container className="my-4">
        <h1 className="mb-4">Jobs Portal</h1>
        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 
        {data && data.results.map(job => {
            return <Job key={job.id} job={job} />
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={data && data.page_count} /> 
    </Container>
    );
}
 
export default Portal;