import { useMemo, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudList } from "./CrudList";
import { CrudFilters } from "./CrudFilters";

export function CrudApp({ initialList = [] }) {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const visibleList = useMemo(() => {
    switch (filter) {
      case "active":
        return list.filter((l) => !l.done);
      case "done":
        return list.filter((l) => l.done);
      default:
        return list;
    }
  }, [list, filter]);

  function addList(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setList((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed, done: false },
    ]);

    setText("");
  }

  function toggleList(id) {
    setList((prev) =>
      prev.map((l) => (l.id === id ? { ...l, done: !l.done } : l))
    );
  }

  function removeList(id) {
    setList((prev) => prev.filter((l) => l.id !== id));
  }

  return (
    <div id="app">
      <div id="title">
        <h1> Mis tareas </h1>
      </div>

      <CrudForm value={text} onChange={setText} onSubmit={addList} />

      <div id="list-filtered">
        <CrudFilters filter={filter} onChange={setFilter} />

        <CrudList
          lists={visibleList}
          onToggle={toggleList}
          onRemove={removeList}
        />
      </div>
    </div>
  );
}
