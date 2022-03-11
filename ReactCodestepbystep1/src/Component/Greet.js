import React from 'react';

function Greet(props) {

   function greet()
    {
            alert(props.name)
    }
    return (
        <div>
            
            <h1>Greet   {props.name}</h1>
            <button onClick={greet}>HHH</button>
        </div>
    );
}

export default Greet;