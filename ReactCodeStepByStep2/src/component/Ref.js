import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor(props) {
        super(props)

        this.inputRef = createRef();

    }
    componentDidMount() {
        console.warn(this.inputRef.current.value )
    }
    getval() {
        console.warn(this.inputRef.current.value )
        this.inputRef.current.style.color="red"
        this.inputRef.current.style.backgroundColor="black"

    }
    render() {




        return (
            <>
                <h1>Ref in react</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getval()}>check ref</button>
            </>

        )
    }
}
