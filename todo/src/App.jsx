import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(" ")
  const [todoList, setTodoList] = useState([]);

  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  const handleClick=()=>{
    setTodoList([...todoList, input]);
    setInput("");
  }

  const handleDelete=(index)=>{
    setTodoList(todoList.filter((elements , i)=> i!=index))
  }

  return (
    <>
      <div>
        <div className='container'>
        <h1>ToDo App</h1>
          <input type="text" 
            placeholder="enter a task" 
            onChange={handleChange} 
            value={input}  
            className='input'
          />
          <button className="taskButton" onClick={handleClick}>Add task</button>
        </div>
        <div className='todoList'>
          {
            todoList.map((item, index)=>(
              <div>
                {item}
                <button className='button'onClick={()=>handleDelete(index)}>delete</button>
              </div>
            ))
          }
        </div>
      </div>
     
    </>
  )
}

export default App
