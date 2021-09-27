import React from 'react';
import {Input} from 'reactstrap';
import {Form, Col} from 'react-bootstrap'

const SearchForm = ({ data, onTypeChange , onLevelChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
      <Form.Group as={Col} className="mb-3">
        <Form.Label htmlFor="role" className="detail">Job Industry</Form.Label>
        <Input type="select" name="select" id="role" onChange={onTypeChange} value={data && data.categories}  >
        <option>Enter Your Industry</option>
        <option>IT</option>
        <option>Accounting</option>
        <option>Law</option>
        <option>Education</option>
        <option>Software Engineer</option>
        <option>HR</option>
        <option>Marketing</option>
        </Input>
      </Form.Group>

      
      <Form.Group as={Col} >
       <Form.Label htmlFor="level" className="detail">Job Level</Form.Label>
        <Input type="select" name="select" id="level" onChange={onLevelChange} value={data && data.levels}  >

          <option>Enter Degisnation</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
          <option>Internship</option>
         
        </Input>
      </Form.Group>
     </Form.Row>
    </Form>
  );
}

export default SearchForm;