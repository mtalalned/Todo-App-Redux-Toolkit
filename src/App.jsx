import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteItems, updateTodo } from './Config/redux/reducers/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

const App = () => {
  

  const input = useRef()
  const selector = useSelector(state => state.todos.todos)
  console.log(selector)
  const dispatch = useDispatch()

  const addEntry = (event) => {
    event.preventDefault()
    dispatch (addTodo({
      title: input.current.value,
    }))
  }

  const deleteTodo = (i) => {
    dispatch(deleteItems({
      index: i
    }))
  }

  const editTodo = (i)=>{
    
    const editValue = prompt ('Enter updated value')
    console.log (editValue)
    dispatch (updateTodo ({
      title: editValue,
      index: i,
    }))
  }

  return (
    <div>
      <form onSubmit={(event)=>addEntry(event)}>
        <input type="text" ref={input}/>
        <button type='submit'>Add todo</button>
      </form>

      <ol key={nanoid()}>
        {selector.length > 0 ? selector.map ((item , index)=> {
          return <li key={nanoid()}>
            {item.title} 
            <button onClick={() =>deleteTodo(index)}>Delete</button>
            <button onClick={()=>editTodo(index)}>Edit</button>
          </li>
        }) : <p>No data found</p> }
      </ol>
      
    </div>
  )
}

export default App
