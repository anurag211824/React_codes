import React from "react";

const Todoitems = ({ task, index, markComplete, deleteTask }) => {
  return (
    <div className="task" style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
      {task.text}
      <div>
        <button onClick={() => markComplete(index)}>Complete</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};
export default Todoitems;
