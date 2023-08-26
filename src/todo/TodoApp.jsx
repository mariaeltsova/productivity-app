import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { ProgressBar } from "./ProgressBar";
import { Menu } from "../global/Menu";
import { RightSide } from "./RightSide";

export function TodoApp() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); //runs this function every time todos change


  const [progress, setProgress] = useState(() => {
    const localValue = localStorage.getItem("PROGRESSTODO");
    if (localValue == null) return 0;
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("PROGRESSTODO", JSON.stringify(progress))
  }, [progress])


  const [mainDivVisible, setMainDivVisibility] = useState(true);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed }; //state object is immutable,
          //so when i want to change a state, i create a brand new state object
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  function handleOnDragEnd(res) {
    if (!res.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  function progressFunc(data) {
    console.log(data)
    if (isNaN(data)) {
      data = 1;
    }
    setProgress(data)
  }

  return (
    <>
      <Menu setMainDivVisibility={setMainDivVisibility}></Menu>
      <div className={`main-div ${mainDivVisible ? '' : 'inactive'}`}>
        <div className="div-helper">
          <NewTodoForm onSubmit={addTodo} />
          <div className="main-div" id="container-header-progress">
          
          <h1 className="header">Todo list</h1>
          <ProgressBar className='progressBarEl' progress={progress}></ProgressBar>
          </div>
          <div className="todo-list-div">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            handleOnDragEnd={handleOnDragEnd}
            progressFunc = {progressFunc}
          />
          </div>
        </div>
        <RightSide></RightSide>
      </div>
    </>
  );
}

export default TodoApp;
