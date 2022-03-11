// import React, { Component } from 'react'

// export default class Welcome extends Component {
//   render() {
//     return (
//       <div>Welcome{this.props.name}</div>
//     )
//   }
// }

import React, { Component } from 'react';

class Welcome extends Component {
    constructor(){
        super()
        this.state={
            msg:'welcome Punam'
        }
        
    }
    
statechange()
    {
         this.setState({
             msg:'Thanks'})
    }
    
    render() {
        return (
            <div>
              <h1>{this.state}</h1>
              <button onClick={()=>this.statechange()}>Subscribe</button>  
            </div>
        );
    }
}

export default Welcome;