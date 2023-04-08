import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React",
      day: "Dec 12th at 2:30pm",
      isDone: true,
    },
    {
      id: 2,
      text: "Feed the dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In Class",
      day: "Dec 14th at 3:30pm",
      isDone: false,
    },
  ]);

  const [showTaskBar, setShowTaskBar] = useState(false);

  //Delete Task
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  //Add Task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100 + 1);
    const newAddTask = { id, ...newTask };
    setTasks([...tasks, newAddTask]);
  };

  //Toggle Task
  const toggleTask = (toggleTaskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleTaskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  //Task Form Button
  const showTaskForm = () => {
    setShowTaskBar(!showTaskBar);
  };

  return (
    <div className="App">
      <Header
        title="Task Tracker"
        showTaskForm={showTaskForm}
        showTaskBar={showTaskBar}
      />
      {showTaskBar && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      ) : (
        <div
          style={{
            width: "50rem",
            textAlign: "center",
            backgroundColor: "cadetblue",
            padding: "2rem",
            color: "white",
          }}
        >
          <h2>No Task To Show</h2>
        </div>
      )}
    </div>
  );
}

export default App;
