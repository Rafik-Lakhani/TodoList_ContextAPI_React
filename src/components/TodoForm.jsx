import { useState } from "react";
import React from "react";
import { usetodo } from "../context/TodoContext";

function TodoForm() {
  const { addtodo } = usetodo()
  const [todo, settodo] = useState('');

  const addingtodo = (e) => {
    e.preventDefault();
    addtodo({
      id: Date.now(),
      title: todo,
      complate: false,
    });
    settodo('')
  };
  return (
    <form className="flex" onSubmit={addingtodo}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-xl"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
