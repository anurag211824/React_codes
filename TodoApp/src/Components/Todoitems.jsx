import React from "react";
import "./CSS/Todoitems.css";
import tick from "./Assets/tick.png";
import notTick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const Todoitems = ({ text, isCompleted, onComplete, onDelete }) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <img src={isCompleted ? tick : notTick} onClick={onComplete} />
        <div>{text}</div>
      </div>
      <img src={cross} alt="Delete" onClick={onDelete} />
    </div>
  );
};

export default Todoitems;
