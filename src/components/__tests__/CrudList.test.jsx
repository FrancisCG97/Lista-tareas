import { render, screen } from "@testing-library/react";
import { CrudList } from "../CrudList";

describe("CrudList", () => {
  test("Muestra 'No hay tareas' si lists está vacío", () => {
    render(<CrudList lists={[]} onToggle={() => {}} onRemove={() => {}} />);
    expect(screen.getByText(/no hay tareas/i)).toBeInTheDocument();
  });

  test("Renderiza items cuando hay tareas", () => {
    render(
      <CrudList
        lists={[
          { id: "1", text: "A", done: false },
          { id: "2", text: "B", done: true },
        ]}
        onToggle={() => {}}
        onRemove={() => {}}
      />
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(2);
  });
});
