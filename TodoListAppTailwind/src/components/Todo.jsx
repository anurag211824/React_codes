import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  // State to manage the list of todos
  const [todolist, setTodoList] = useState([]);
  
  // Ref for the input field
  const inputRef = useRef();
  
  // Function to add a new todo
  const add = () => {
    const inputText = inputRef.current.value.trim();

    // If input is empty, do nothing
    if (inputText === "") {
      return null;
    }

    // Create a new todo item
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    // Add new todo to the list
    setTodoList((prev) => [...prev, newTodo]);

    // Clear the input field
    inputRef.current.value = "";
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  // Function to toggle the completion status of a todo
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  // Effect to log the current state of the todo list whenever it changes
  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title section */}
      <div className="flex items-center gap-2">
        <img className="w-8 h-8" src={todo_icon} alt="" />
        <h1 className="text-2xl font-semibold">To-Do List</h1>
      </div>

      {/* Input section */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:twxt-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* Todo List section */}
      <div>
        {todolist.map((item, index) => {
          return (
            <Todoitems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            ></Todoitems>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
