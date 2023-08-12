export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  
    return <li>
    <label>
      <input
      className="checkbox-todo"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.chacked)}
      />
      {title}
    </label>
    <button //almost always pass a function like ()=>
      onClick={() => deleteTodo(id)}
      className="small-btn"
    >
      Delete
    </button>
  </li>
}