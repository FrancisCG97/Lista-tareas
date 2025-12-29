import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { CrudForm } from "../CrudForm";

function Wrapper({ onChangeSpy }) {
  const [value, setValue] = React.useState("");

  return (
    <CrudForm
      value={value}
      onChange={(next) => {
        setValue(next);
        onChangeSpy(next);
      }}
      onSubmit={(e) => e.preventDefault()}
    />
  );
}

test("CrudForm llama onChange cuando escribo", async () => {
  const user = userEvent.setup();
  const onChangeSpy = jest.fn();

  render(<Wrapper onChangeSpy={onChangeSpy} />);

  const input = screen.getByPlaceholderText(/agregue una tarea/i);
  await user.type(input, "Hola");

  expect(onChangeSpy).toHaveBeenLastCalledWith("Hola");
});

test("Llama a onSubmit al enviar el formulario", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn((e) => e.preventDefault());

  render(<CrudForm value="Algo" onChange={() => {}} onSubmit={onSubmit} />);

  await user.click(screen.getByRole("button", { name: /agregar tarea/i }));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
