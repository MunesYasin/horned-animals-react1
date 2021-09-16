import React from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'
import SelectedBeast from './SelectedBeast'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{



constructor(props){
  super(props)
  this.state = {
    showModal: false,
     selected : data,
    animal :{},
    horns : 0

  }
}

hundleClose = () =>{
  this.setState({
    showModal: false
  })
}



submitForm = async   (event)=>{
    event.preventDefault();

    await this.setState({

        horns :event.target.number.value
    })


let filterdArray = data.filter (item =>{


if (item.horns == this.state.horns){
    return item 
}




})
console.log(filterdArray)

this.setState({

    selected :filterdArray
  
   })
console.log(this.state.selected)




}







clickedImg = (title) =>{
let selected = data.find(item =>{
  if (item.title === title){
    return item
  }
})
this.setState({
    showModal: true,
   animal: selected
  })
  
console.log(this.state.animal)

}

    render(){

      
        return(

<div>



<Form submitForm = {this.submitForm} />






{this.state.selected.map(item =>{
return(


<HornedBeasts 
 hundleShow = {this.clickedImg}
 title={item.title} 
imageUrl={item.image_url}
  description={item.description}
  horns = {item.horns}
  />
 ) })
}
  
   
    





<SelectedBeast 
  show = {this.state.showModal}
  
  hundleClose = {this.hundleClose}
  animal ={this.state.animal}
   />
   
</div>
    
        
        )
}}
    
export default Main 