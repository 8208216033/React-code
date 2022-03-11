import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import './todo.css'

const Todolist = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todoreducer.list)

  const addData=(e)=>
  { 
    console.log(inputData)
    if(inputData!=="")
    {
      console.log(inputData)
      dispatch(addTodo(inputData))
      setInputData("")
      
    }
    
  }
  return (
    <>
      <div className='todo_list'>
        <div>
          <h1>Add your list here</h1>
          <input type='text' autoComplete='off' placeholder='add item' className='input' value={inputData} onChange={(e) => setInputData(e.target.value)} />
          {/* <button onClick={() => dispatch(addTodo(inputData))}>+</button> */}
          <button onClick={() => addData(inputData)}>Add item</button>
          {/* {
            //  inputData!==""?<button onClick={() => dispatch(addTodo(inputData))}>+</button>:""
            inputData!==""?
            <div>
              <button onClick={() => dispatch(addTodo(inputData))}>+</button>
              <button onClick={(e) =>setInputData("") }>clear</button>
           
            </div>:""
            
          } */}
        
        </div>

        <div>
          {
            list.map((elem) => {
              return (
                <div key={elem.id}>
                  <h3>{elem.data}<span><button onClick={() => dispatch(deleteTodo(elem.id))}>Remove Item</button></span></h3>

                </div>
              )
            }

            )
          }


        </div>

        <button onClick={() => dispatch(removeTodo())} className='todo_but'>Remove all</button>
      </div>
    </>
  )
}

export default Todolist