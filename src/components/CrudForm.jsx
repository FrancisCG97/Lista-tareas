export function CrudForm({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} id="form">
      <label htmlFor="form-input" id="title-form">
        {" "}
        Nueva tarea{" "}
      </label>
      <input
        id="form-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Agregue una tarea"
      />
      <div id="form-button">
        <button type="submit" id="add-button"> Agregar tarea </button>
      </div>
    </form>
  );
}
