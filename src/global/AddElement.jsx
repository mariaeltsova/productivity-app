import { useState } from "react";

export function AddElement({onSubmit}) {
    const [newTask, setNewTask] = useState(""); //

    function handleSubmit(e) {
        e.preventDefault();
        if (newTask === "") return
        onSubmit(newTask);
        setNewTask("");
      }

    return (<>
    <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          id="task"
          className="new-task-text"
        ></input>
      <button className="btn"  onClick={handleSubmit}>Add</button>
    </>);
}