import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div
      className={`task ${task.isDone ? "" : "done"}`}
      onDoubleClick={() => toggleTask(task.id)}
    >
      <h3>
        {task.text}
        <FaTimesCircle
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
