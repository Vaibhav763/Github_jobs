import renderHTML from 'react-render-html'
import React from 'react'

const JobDetails = ({job}) => {
    return ( 
        <div>{job.contents}</div>
     );
}
 
export default JobDetails;