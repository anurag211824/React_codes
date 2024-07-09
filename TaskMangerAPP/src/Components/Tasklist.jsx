import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
let count = 0;
const Tasklist = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    if (inputRef.current.value.trim() !== '') {
      setTodos([...todos, { no: count++, text: inputRef.current.value.trim(), isCompleted: false }]);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <Header onAdd={() => add()
              
      } ></Header>
    </div>
  )
}

export default Tasklist



