import { CrudItem } from "./CrudItem";

export function CrudList({ lists, onToggle, onRemove }) {
  if (lists.length === 0) {
    return <p className="no-tasks">No hay tareas</p>;
  }

  return (
    <div className="list-container">
      <div className="list">
        {lists.map((item) => (
          <CrudItem
            key={item.id}
            list={item}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
