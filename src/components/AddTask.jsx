import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [formData, setFormData] = useState({
    text: "",
    day: "",
  });
  const { text, day } = formData;

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, isDone: false });
    setFormData({
      text: "",
      day: "",
    });
  };

  return (
    <div className="form">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Add Task"
            required
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            type="text"
            name="day"
            id="day"
            placeholder="Add Day & Time"
            required
            value={day}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
