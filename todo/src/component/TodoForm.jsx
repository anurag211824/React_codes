import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Task..."
      />
      <button className="main-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
