import React,{useState} from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import Accordion from 'react-bootstrap/Accordion'


const Job = ({key, job}) => {
    const [Open, setOpen] = useState(false);
    console.log(job.refs.landing_page);
    return ( 
        
        <Card className="mb-3">
      <Card.Body>
        
            <Card.Title>
              {job.name} - <span className="text-muted font-weight-light">{job.company.name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.publication_date).toLocaleDateString()}
         </Card.Subtitle>
            
         <Button href={job.refs.landing_page} variant="secondary" size="lg">
            Link
        </Button>
             {/* <div style={{ wordBreak: 'break-all' }}>
               <ReactMarkdown source= />
             </div> */}
        

        {/* <Card.Text>
           <Button
             onClick={() => setOpen(Open => !Open)}
          variant="primary"
           >
             {Open ? 'Hide Details' : 'View Details'}
         </Button>
         </Card.Text>
         <Collapse in={Open}>
           <div className="mt-4">
             <ReactMarkdown source={job.contents} />
           </div>
        </Collapse> */}
{/* 
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </Accordion.Body>
          </Accordion.Item>
          </Accordion> */}
       </Card.Body>
     </Card>
     );
}
 
export default Job;