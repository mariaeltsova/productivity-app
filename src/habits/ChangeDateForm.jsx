import { useState} from "react";
import PropTypes from 'prop-types';

const ChangeDateForm = (props) => { //Named export
  const [newDate, setNewDate] = useState(""); //
  function handleSubmit(e) {
    e.preventDefault();
    if (newDate === "") return;
    props.onSubmit(newDate);
  }

  return (
    <form onSubmit={handleSubmit} className="change-date-form">
      <input
        className="date-input"
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      ></input>
      <button className="small-btn">Set start date</button>
    </form>
  );

}


ChangeDateForm.propTypes = {
  onSubmit: PropTypes.func
};

export default ChangeDateForm; 