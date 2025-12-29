export function CrudItem({ list, onToggle, onRemove }) {
  return (
    <div className="task">
      <label className="task-text">
        <input
          type="checkbox"
          checked={list.done}
          onChange={() => onToggle(list.id)}
        />
        <span style={{ textDecoration: list.done ? "line-through" : "done" }}>
          {list.text}
        </span>
      </label>
      <button className="remove-button" onClick={() => onRemove(list.id)}> Eliminar tarea </button>
    </div>
  );
}
