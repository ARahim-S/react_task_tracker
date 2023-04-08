import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="tasks">
      {tasks?.map((task) => {
        return (
          <div key={task.id}>
            <Task task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
