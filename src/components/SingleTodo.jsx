import React from "react";
import { useState } from "react";
import { usetodo } from "../context/TodoContext";

function SingleTodo({ todo }) {
    const {updatetodo ,iscomplate, deletetodo} = usetodo() 
    const [todoMsg, setTodoMsg] = useState(todo.title)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const changecomplatestatus=()=>{
        iscomplate(todo.id)
    }



  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complate ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      } w-full`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complate}
        onChange={changecomplatestatus}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          iscomplate ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complate ? "line-through" : ""} text-xl`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.complate) return;

          if (isTodoEditable) {
            updatetodo(todo.id,todo);
            setIsTodoEditable((prev)=>!prev)
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deletetodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default SingleTodo;
