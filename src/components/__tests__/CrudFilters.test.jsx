import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CrudFilters } from "../CrudFilters";

describe("CrudFilters", () => {
  test("llama onChange con all, active y done", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<CrudFilters filter="all" onChange={onChange} />);

    await user.click(
      screen.getByRole("button", { name: "Todas las tareas" })
    );
    await user.click(
      screen.getByRole("button", { name: "En proceso" })
    );
    await user.click(
      screen.getByRole("button", { name: "Completadas" })
    );

    expect(onChange).toHaveBeenCalledWith("all");
    expect(onChange).toHaveBeenCalledWith("active");
    expect(onChange).toHaveBeenCalledWith("done");
  });
});


  test("Marca aria-pressed en el filtro activo", async () => {
    render(<CrudFilters filter="done" onChange={() => {}} />);

    expect(
      screen.getByRole("button", { name: /completadas/i })
    ).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /en proceso/i })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });