import { useState, useEffect } from "react";
import { Menu } from "../global/Menu";
import NewHabitForm from "./NewHabitForm";
import HabitList from "./HabitList";
import ChangeDateForm  from "./ChangeDateForm";

export function Habits() {
  console.log('---------checkboxes',localStorage.getItem("CHECKBOXES"))
  const [habits, setHabits] = useState(() => {
    const localValue = localStorage.getItem("HABITS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("HABITS", JSON.stringify(habits));
  }, [habits]); //runs this function every time habits change

  const [startDate, setStartDate] = useState(() => {
    const localValue = localStorage.getItem("STARTDATE");
    console.log('localvalue for STARTDATE ', localValue)
    if (localValue == null) return new Date();

    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("STARTDATE", JSON.stringify(startDate));
  }, [startDate]);

  const [checkboxes, setCheckboxes] = useState(() => {
    const localValue = localStorage.getItem("CHECKBOXES");
    console.log('localvalue for CHECKBOXES', localValue);
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("CHECKBOXES", JSON.stringify(checkboxes));
    console.log(checkboxes);
  }, [checkboxes]);

  function addHabit(title) {
    const id = crypto.randomUUID();
    setHabits((currentHabits) => {
      return [
        ...currentHabits,
        {
          id: id,
          title,
        },
      ];
    });
    const date = new Date(startDate);
    const dayDates = Array.from({ length: 21 }, (_, i) => {
      let newdate = new Date();
      newdate.setDate(date.getDate() + i);
      let dayAndMonth = newdate.getDate() + "." + (newdate.getMonth() + 1);
      return dayAndMonth;
    });
    setCheckboxes((currentCheckboxes) => {
      return [
        ...currentCheckboxes,
        {
          id: id,
          title: title,
          checks: dayDates.map((dd) => {
            return { id: dd + "_" + id, checked: false };
          }),
        },
      ];
    });
  }

  function changeStartDate(newDate) {
    if (
      window.confirm("Are you sure you want to change start date? all checks will be lost.")
    ) {
      setStartDate(newDate);
      //nekako moram pridobiti all the habits
      const date = new Date(newDate);
      const dayDates = Array.from({ length: 21 }, (_, i) => {
        let newdate = new Date();
        newdate.setDate(date.getDate() + i);
        let dayAndMonth = newdate.getDate() + "." + (newdate.getMonth() + 1);
        return dayAndMonth;
      });
      //clear checkboxes
      //loop over habits array and crerat
      setCheckboxes(() => {
        return habits.map((habit) => ({
          id: habit.id,
          title: habit.title,
          checks: dayDates.map((dd) => ({
            id: dd + "_" + habit.id,
            checked: false,
          })),
        }))})
    }
 
    }

  function deleteHabit(id, title) {
    if (
      window.confirm("Are you sure you want to delete habit " + title + "?")
    ) {
      setHabits((currentHabits) => {
        return currentHabits.filter((habit) => habit.id !== id);
      });
      setCheckboxes((currentCheckboxes) => {
        return currentCheckboxes.filter((cb) => cb.id !== id);
      });
    }
  }

  async function updateCheckboxes(e) {
    const habitid = e.target.getAttribute("habitid");
    const checkid = e.target.id;
    const checkedHere = e.target.checked;
   
    setCheckboxes((currentCheckboxes) => {
      return currentCheckboxes.map((cb) => {
        if (cb.id === habitid) {
          const updatedChecks = cb.checks.map((check) => {
            if (check.id === checkid) {
              return { ...check, checked: checkedHere };
            } else {
              return check;
            }
          });
          return { ...cb, checks: updatedChecks };
        } else {
          return cb;
        }
      });
    });
  }
  return (
    <>
      <Menu></Menu>
      <div className="div-container">
      <h1 className="heading">Habit tracker</h1>

      <HabitList
        habits={habits}
        startDate={startDate}
        deleteHabit={deleteHabit}
        updateCheckboxes={updateCheckboxes}
        checkboxes={checkboxes}
      ></HabitList>

      <div id="div-modify-habits" >
        <NewHabitForm onSubmit={addHabit}></NewHabitForm>
        <ChangeDateForm onSubmit={changeStartDate}></ChangeDateForm>
      </div>
      </div>
    </>
  );
}
