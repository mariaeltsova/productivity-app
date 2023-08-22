import { useState } from "react";
import PropTypes from 'prop-types';

function NewTodoForm({ onSubmit }) {
  const [newTask, setNewTask] = useState(""); //

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return;
    onSubmit(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <h1 className="heading"> New task</h1>
      
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        id="task"
        className="new-task-text"
      ></input>
      <button className="btn">Add</button>
    </form>
  );
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default NewTodoForm;