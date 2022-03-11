import React from 'react'

const Array = () => {
    const students=['Pss','xyz','hhk']
  return (
    <div>
        <h1>Array</h1>
        {
            students.map((data)=>
            {
            //   console.log(data)
            <h1>{data}</h1>
         
            })
        }

        </div>
  )
}

export default Array