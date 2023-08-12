import { useState, useEffect } from "react";

export function ChangeDateForm({ onSubmit }) {
  const [newDate, setNewDate] = useState(""); //
  function handleSubmit(e) {
    e.preventDefault();
    if (newDate === "") return;
    onSubmit(newDate);
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
