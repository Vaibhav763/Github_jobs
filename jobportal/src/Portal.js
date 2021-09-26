import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';


const Portal = ({data}) => {

    console.log(data);
    return (  
     <Container className="my-4">
        <h1 className="mb-4">Jobs Portal</h1>
      
        {data && data.results.map(job => {
            return <Job key={job.id} job={job} />
        })}
        
    </Container>
    );
}
 
export default Portal;