import React,{useState} from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'

const Job = ({job}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    console.log(job.contents);

    return ( 
        
    <Card className="mb-3">
      <Card.Body>
      <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.name} - <span className="text-muted font-weight-light">{job.company.name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.publication_date).toLocaleDateString()}
            </Card.Subtitle>
           </div> 
          <Button href={job.refs.landing_page} variant="secondary" size="lg">
              Link
          </Button>
        </div>

        <Card.Text>
          <Button
             onClick={toggle} variant="primary">
             {isOpen ? 'Hide Details' : 'View Details'}
         </Button>   
         <Collapse in={isOpen}>
           <div>{job.contents}</div>
          </Collapse> 
        </Card.Text> 
         

       </Card.Body>
     </Card>
     );
}
 
export default Job;