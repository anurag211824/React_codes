import React, { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import Todoitems from "./Todoitems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim() !== '') {
      setTodos([...todos, { no: count++, text: inputRef.current.value.trim(), isCompleted: false }]);
      inputRef.current.value = '';
    }
  };

  const completeTodo = (no) => {
    setTodos(todos.map(todo => (
      todo.no === no ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )));
  };

  const deleteTodo = (no) => {
    setTodos(todos.filter(todo => todo.no !== no));
  };

//   useEffect(() => {
//     console.log(todos);
//   }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
          ref={inputRef}
        />
        <button onClick={add} className="todo-add-btn">ADD</button>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todoitems 
            key={index} 
            text={item.text} 
            isCompleted={item.isCompleted} 
            onComplete={() => completeTodo(item.no)} 
            onDelete={() => deleteTodo(item.no)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
