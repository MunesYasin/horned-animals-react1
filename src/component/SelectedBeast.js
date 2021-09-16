import React from 'react'

import {Modal} from 'react-bootstrap/'
import {Button} from 'react-bootstrap/'

import 'bootstrap/dist/css/bootstrap.min.css';



class SelectedBeast extends React.Component{

render(){
  
    
    let image = <img src={this.props.animal.image_url} alt="" width={200}/>

return (
<>

<Modal show={this.props.show} onHide={this.props.hundleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             {image}
       </Modal.Body>
        <Modal.Body>
            {this.props.animal.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hundleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </>
      )
      }
    }
    
    export default SelectedBeast