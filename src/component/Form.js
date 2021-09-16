  
import React from "react"
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class FormM extends React.Component{
render(){
    return(
<>


<Form onSubmit = {this.props.submitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>How Many Horns ? </Form.Label>
  </Form.Group>
<Form.Select name="number" aria-label="Default select example">
  

  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">Wow...</option>
</Form.Select>

<Button variant="primary" type="submit">
            Submit
          </Button>
</Form>
</>


)}}
export default FormM