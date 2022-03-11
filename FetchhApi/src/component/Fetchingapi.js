import React, { Component } from 'react'

export default class Fetchingapi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null,
         isLoaded:false,
         item:[]

      }
    
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts').then((res=>res.json())
        .then(
            (result)=>
            {
                this.setState({
                    isLoaded:true,
                    items:result.items
                });
            },
            (error)=>
            {
                this.setState({
                    isLoaded:true,error
                })
            }
        ))
    }
  render() {
      const{error,isLoaded,items}=this.state;
      if(error){
          return <div>Error:{error.message}</div>
      }else{
          return(
              <>
              <ul>
                  {items.map(item=>
                      <li key={item.id}>{item.title} {item.body}</li>
                  )}
              </ul>
              </>
          )
      }
    
  }
}
