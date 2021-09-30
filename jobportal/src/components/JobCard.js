import React,{useState} from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const JobCard = ({job}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return ( 
    <Fade bottom>
    <Card className="mb-4">
      <Card.Body>
      <div className="d-flex justify-content-between">
          <div>
            <Card.Title className="mb-2 cardt">
              {job.name} - <span className="cardd font-weight-light">{job.company.name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-4 cards">
             Location: {job.locations[0] && job.locations[0].name}
            </Card.Subtitle>
            <Card.Subtitle className=" mb-3">
             Post : {job.levels[0] && job.levels[0].name}
            </Card.Subtitle>
           
           </div> 
           <div>
           <Card.Subtitle className="text-muted mb-4 mt-2">
            Date Posted: {new Date(job.publication_date).toLocaleDateString()}
            </Card.Subtitle>
          <Button href={job.refs.landing_page} variant="secondary" className="cardb" >
            Job Link
          </Button>
          </div>
        </div>

        <Card.Text >
          <Button className="mb-3"
             onClick={toggle} variant="primary">
             {isOpen ? 'Hide Details' : 'View Details'}
         </Button>   
         <Collapse in={isOpen}>
         <div
         dangerouslySetInnerHTML={{
              __html: job.contents
          }}></div>
         
        </Collapse> 
        </Card.Text> 
         

       </Card.Body>
     </Card>
     </Fade>
     );
}
 
export default JobCard;