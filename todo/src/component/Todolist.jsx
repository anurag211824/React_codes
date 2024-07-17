import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todoitems from "./Todoitems";

const Todolist = () => {
  const [tasks, setTasks] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Learn Tailwind CSS", isCompleted: false },

  ]);

  const addTask = (text) => {
    const newTasks = [...tasks, { text, isCompleted: false }];
    setTasks(newTasks);
  };

  const markComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    // tasks[index].isCompleted=!tasks[index].isCompleted;
    // setTasks(tasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="task-list">
      <TodoForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Todoitems
          key={index}
          index={index}
          task={task}
          markComplete={markComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Todolist;