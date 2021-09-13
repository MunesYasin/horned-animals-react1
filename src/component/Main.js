import React from 'react'
import HornedBeasts from './HornedBeasts'
import Data from './Data.json'

class Main extends React.Component{

    render(){
        return(
<div>

{Data.map(item =>{
return <HornedBeasts title={item.title} imageUrl={item.image_url} description={item.description}/>
    })
}
</div>

        )
    }
}
export default Main;