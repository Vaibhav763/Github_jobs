import React from 'react'
import { Form, Col} from 'react-bootstrap'

const SearchForm = ({ data, onTypeChange }) => {
  return ( 

  <Form className="mb-4">
    <Form.Row className="align-items-end">

      <Form.Group as={Col}>
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={onTypeChange} value={data && data.categories} name="description" type="text" />
      </Form.Group>

     <Form.Group as={Col}>
       <Form.Label for="level">Post Level</Form.Label>
        <Form.Control onChange={onTypeChange} value={data && data.levels} name="postlevel" type="text" id="level" /> 
      </Form.Group> 
      

    </Form.Row>
  </Form>

   );
}
 
export default SearchForm;

