import React from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'
import SelectedBeast from './SelectedBeast'



class Main extends React.Component{



constructor(props){
  super(props)
  this.state = {
    showModal: false,
     selected : data,
    animal :{}
  }
}

hundleClose = () =>{
  this.setState({
    showModal: false
  })
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

{data.map(item =>{

return (
<>


<HornedBeasts 
 hundleShow = {this.clickedImg}
 title={item.title} 
 imageUrl={item.image_url}
  description={item.description}
  />

  
   </>
    )})

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