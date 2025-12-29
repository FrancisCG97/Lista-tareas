import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CrudApp } from "../CrudApp";

describe("CrudApp (integración de todas las partes)", () => {
  test("agrega una tarea y se puede filtrar", async () => {
    const user = userEvent.setup();

    render(
      <CrudApp
        initialList={[
          { id: "1", text: "Activa", done: false },
          { id: "2", text: "Lista", done: true },
        ]}
      />
    );

    //Agregar una tarea nueva (Queda activa, done: false)
    const input = screen.getByPlaceholderText(/agregue una tarea/i);

    await user.type(input, "Nueva");
    await user.click(screen.getByRole("button", { name: /agregar tarea/i }));
    expect(screen.getByText("Nueva")).toBeInTheDocument();

    //Filtrar 'En proceso'
    await user.click(screen.getByRole("button", { name: /en proceso/i }));
    expect(screen.getByText("Activa")).toBeInTheDocument();
    expect(screen.getByText("Nueva")).toBeInTheDocument();
    expect(screen.queryByText("Lista")).not.toBeInTheDocument();

    //Filtrar 'Comlpetadas'
    await user.click(screen.getByRole("button", { name: /completadas/i }));
    expect(screen.getByText("Lista")).toBeInTheDocument();
    expect(screen.queryByText("Activa")).not.toBeInTheDocument();
    expect(screen.queryByText("Nueva")).not.toBeInTheDocument();
  });
});
