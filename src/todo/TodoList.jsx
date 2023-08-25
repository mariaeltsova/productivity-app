import { TodoItem } from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function TodoList({todos, toggleTodo, deleteTodo, handleOnDragEnd, progressFunc}) {

let numChecked = 0;
todos.map(todo => {
    if (todo.completed === true) {
      numChecked+= 1;
    }
})
progressFunc(numChecked / todos.length)
return <DragDropContext onDragEnd={handleOnDragEnd}>
  <Droppable droppableId="todos">
    {(provided) =>
    <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
    {todos.length === 0 && <h3>Nothing to do, finished everything! 🎉</h3>}
    {todos.map((todo, index) => {
      return (
        <Draggable key = {todo.id} draggableId={todo.id} index={index}>
          {(provided) => 
          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <TodoItem {...todo} key = {todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </li>
          }
        </Draggable>
      );
    })}
    {provided.placeholder}
    </ul>
    }

</Droppable>
</DragDropContext>
}