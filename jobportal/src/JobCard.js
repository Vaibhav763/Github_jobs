import React,{useState} from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'

const JobCard = ({job}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return ( 
        
    <Card className="mb-3">
      <Card.Body>
      <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.name} - <span className="text-muted font-weight-light">{job.company.name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
             {job.locations[0] && job.locations[0].name}
            </Card.Subtitle>
            <Card.Subtitle className="text-muted mb-2">
             Post : {job.levels[0] && job.levels[0].name}
            </Card.Subtitle>
           
           </div> 
           <Card.Subtitle className="text-muted mb-2">
              {new Date(job.publication_date).toLocaleDateString()}
            </Card.Subtitle>
          <Button href={job.refs.landing_page} variant="secondary" >
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
 
export default JobCard;