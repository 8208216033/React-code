import React,{forwardRef} from 'react'

const Forwordrefchild = (props,ref) => {
  return (
      <>
       <div>Forwordrefchild</div>
       <input type="text" ref={ref}/>
      </>
   
  )
}

export default forwardRef(Forwordrefchild)