import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CrudItem } from "../CrudItem";

describe("CrudItem", () => {
  test("Muestra el texto y el checkbox según done", () => {
    render(
      <CrudItem
        list={{ id: "1", text: "Tarea 1", done: true }}
        onToggle={() => {}}
        onRemove={() => {}}
      />
    );

    expect(screen.getByText("Tarea 1")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("Llama a onToggle con el id al clickear en el checkbox", async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();

    render(
      <CrudItem
        list={{ id: "1", text: "Tarea 1", done: false }}
        onToggle={onToggle}
        onRemove={() => {}}
      />
    );

    await user.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith("1");
  });

  test("Llama a onRemove con el id al clickear en Eliminar", async () => {
    const user = userEvent.setup();
    const onRemove = jest.fn();

    render(
      <CrudItem
        list={{ id: "1", text: "Tarea 1", done: false }}
        onToggle={() => {}}
        onRemove={onRemove}
      />
    );

    await user.click(screen.getByRole("button", { name: /eliminar/i }));
    expect(onRemove).toHaveBeenCalledWith("1");
  });
});
