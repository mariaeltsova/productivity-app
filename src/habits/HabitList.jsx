import { HabitLine } from "./HabitLine";


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function HabitList({ habits, startDate, deleteHabit, updateCheckboxes, checkboxes }) {
  


  const date = new Date(startDate);
  const dayEls = Array.from(
    { length: 21 },
    (_, i) => days[(date.getDay() + i) % 7]
  );
  const dayDates = Array.from({ length: 21 }, (_, i) => {
    let newdate = new Date(startDate);
    newdate.setDate(date.getDate() + i);
    let dayAndMonth = newdate.getDate() + "." + (newdate.getMonth() + 1);
    return dayAndMonth;
  });

  const columns = ["Habit", ...dayEls];
  const datesHeaders = ["", ...dayDates];

  return (
    <>
      <div id="days">
        <table>
          <thead>
            <tr>
              {datesHeaders.map((header) => (
                <th
                  className="habit-header-date"
                  id={header + "_"}
                  key={header + "_"}
                >
                  {header}
                </th>
              ))}
            </tr>
            <tr>
              {columns.map((col, i) => (
                <th
                  className="habit-header"
                  id={datesHeaders[i] + "_"}
                  key={datesHeaders[i] + "_"}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <HabitLine
                key={habit.title}
                habit={habit}
                datesHeaders={datesHeaders}
                deleteHabit={deleteHabit}
                updateCheckboxes={updateCheckboxes}
                checkboxes={checkboxes}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
