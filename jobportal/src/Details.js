function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  function Details(job) {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{job.contents}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
export default Details;