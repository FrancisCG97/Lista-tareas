export function CrudFilters({ filter, onChange }) {
  return (
    <div role="group" className="list-filters" aria-label="Filtros de tareas">
      <button
        type="button"
        className="button-filter"
        onClick={() => onChange("all")}
        aria-pressed={filter === "all"}
      >
        Todas las tareas
      </button>

      <button
        type="button"
        className="button-filter"
        onClick={() => onChange("active")}
        aria-pressed={filter === "active"}
      >
        En proceso
      </button>

      <button
        type="button"
        className="button-filter"
        onClick={() => onChange("done")}
        aria-pressed={filter === "done"}
      >
        Completadas
      </button>
    </div>
  );
}
