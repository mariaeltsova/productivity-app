import { useState } from "react";
import PropTypes from 'prop-types';

const NewSpendingForm = (props) => {
  const [title, setTitle] = useState(""); //
  const [date, setDate] = useState(""); //
  const [amount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (date === "" || title === "") return 
    props.onSubmit(date, title);
   }

  return (
    <form onSubmit={handleSubmit} className="new-spending-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="spending title"
        placeholder="title, eg: raincoat"
      ></input>
      <input
        className="date-input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      
<label htmlFor="amount">Amount spent:</label>
      <input name="amount" type="number" value={amount} placeholder="amount spent"></input>
      <button className="btn">Add</button>
    </form>
  );
}

NewSpendingForm.propTypes = {
  onSubmit: PropTypes.func
};

export default NewSpendingForm;
