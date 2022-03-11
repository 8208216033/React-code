import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    change()
    {
        this.setState=({
            message: 'GoodBye'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.change()}>Click</button>
      </div>
    )
  }
}

export default EventBinding