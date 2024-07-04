import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

// Todoitems component representing each todo item
const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      {/* Toggle completion status on click */}
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {/* Display appropriate icon based on completion status */}
        <img className="w-7" src={isComplete ? tick : not_tick} alt="status icon" />
        
        {/* Display the text with a line-through if completed */}
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      
      {/* Delete the todo item on click */}
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt="delete icon"
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
