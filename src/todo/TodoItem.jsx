export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return <>
    <label>
      <input
      className="checkbox-todo"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button //almost always pass a function like ()=>
      onClick={() => deleteTodo(id)}
      className="small-btn"
    >
      Delete
    </button>
    </>
}