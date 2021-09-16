import React from 'react'
 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap/'
import {Button} from 'react-bootstrap/'
class HornedBeasts extends React.Component{



constructor(props){
    super(props);
    this.state = {
        num : 0
    }
}


increase = () =>{
    this.setState({
        num :this.state.num +1
    })
} 


hundleShow =() => {
    this.props.hundleShow(this.props.title)
}

    render(){
        return(
            <div>


            
             
        
          <p>{this.props.description}</p>   


            <Card   style={{ width: '18rem' }}>
  <Card.Img variant="top"  onClick={this.hundleShow} src={this.props.imageUrl} alt='image broken'/>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
     {this.state.num}
    </Card.Text>
    <Card.Text>
    {this.props.horns}
    </Card.Text>
    <Button onClick={this.increase} variant="primary">Vote </Button>
  </Card.Body>
</Card>


            </div>
        )
    }
}
export default HornedBeasts;