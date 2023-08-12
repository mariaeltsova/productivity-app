

export function HabitLine({ habit, datesHeaders, deleteHabit, updateCheckboxes, checkboxes }) {
console.log('----datesHeaders', datesHeaders)
  return (
    <tr key={habit.id} id={habit.id} className="habit-line">
      <td className="habit-name" id={-1} key={-1}>
        {habit.title}
      </td>
      {datesHeaders.slice(1).map((day, i) => {
        
        const habitline = checkboxes.find((item) => item.id === habit.id);
        console.log("habitline from HabitLine.jsx", habitline)
      return(  <td key={i} className="checkbox-td">
        {console.log(habitline['checks'])}
        {console.log(day + "_" + habit.id)
        }

          <input checked={habitline['checks'].find((item) => item.id === (day + "_" + habit.id))['checked']}
          onChange={(e) => updateCheckboxes(e)} key={day + "_" + habit.id} id={day + "_" + habit.id} habitid={habit.id} type="checkbox" className="checkbox-habit"></input>
        </td>)
})}
      <td key={datesHeaders.length} id={datesHeaders.length}>
        {" "}
        <button //almost always pass a function like ()=>
          onClick={() => deleteHabit(habit.id, habit.title)}
          className="super-small-btn"
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
