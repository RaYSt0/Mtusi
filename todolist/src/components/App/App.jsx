import { useState } from 'react';
import './App.css';
//import form from '../Form/form.css'
import Form from '../Form/form'


function App() {

  const [todos, setTodos] = useState([])

  const putTodo = (value) => {
    if (value){
      setTodos ([...todos, {id:Date.now(), text: value, done: false}])
    } else{
      alert("Введите текст")
    }
  }


  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return{
        ...todo,
        done: !todo.done
      }
    }))
  }

  return (
    <div className='wrapper'>
      <div className='container'>
          <h1 className='title'>TodoList</h1>
          <Form
            putTodo={putTodo}
          />
          <ul className='todos'>
              {
                todos.map(todo => {
                  return (
                    <li className={todo.done ? "todo done" : "todo"} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                      {todo.text}
                    </li>
                  );
                })
              }
          </ul>
      </div>
    </div>
  );
}

export default App;
