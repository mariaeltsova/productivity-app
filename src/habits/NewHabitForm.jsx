import { useState } from "react";
import PropTypes from 'prop-types';

const NewHabitForm = ( props) => {
  const [newHabit, setNewHabit] = useState(""); //
    
  function handleSubmit(e) {
    e.preventDefault();
    if (newHabit === "") return
    props.onSubmit(newHabit);
    setNewHabit("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-habit-form">
    
        <label htmlFor="habit" className="label-new-habit">New habit:</label>
        <input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          type="text"
          id="habit"
          className="new-habit-text"
        ></input>
      
      <button className="small-btn habits-btn" >Add</button>
    </form>
  );
}

NewHabitForm.propTypes = {
  onSubmit: PropTypes.func
};

export default NewHabitForm;
