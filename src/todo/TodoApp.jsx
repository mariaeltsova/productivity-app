import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { Motivation } from "./Motivation";
import { Menu} from "../global/Menu";
import { Pictures } from "./Pictures";

export function TodoApp() {
   
        const [todos, setTodos] = useState(() => {
          const localValue = localStorage.getItem("ITEMS");
          if (localValue == null) return [];
          return JSON.parse(localValue);
        });
        useEffect(() => {
          localStorage.setItem("ITEMS", JSON.stringify(todos));
        }, [todos]); //runs this function every time todos change
      
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
        /*

        */
      
        return (<>
         <Menu></Menu>
          <div className="main-div">
            <div className="div-helper">
              <NewTodoForm onSubmit={addTodo} />
              <h1 className="header">Todo list</h1>
              <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </div>
            <div className="motivation-and-pictures">
            <Motivation/>
            <Pictures></Pictures>
            </div>
          </div></>
        );
      
}

export default TodoApp;