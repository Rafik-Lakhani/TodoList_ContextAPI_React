import { useState,useEffect } from "react";
import "./App.css";
import { TodosContext } from "./context/TodoContext";
import TodoForm from './components/TodoForm'
import SingleTodo from './components/SingleTodo'

function App() {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos((prev) => [todo, ...prev]);
  };
  const deletetodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updatetodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id == id ? todo : prevtodo))
    );
  };
  const iscomplate = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id == id
          ? { ...prevtodo, complate: !prevtodo.complate }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
      <TodosContext.Provider
        value={{ todos, addtodo, deletetodo, updatetodo, iscomplate }}
      >
        <div className="bg-[#111] min-h-screen m-auto w-[1000px]">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4"><TodoForm/></div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo)=>(
                <SingleTodo todo={todo} key={todo.id}/>
              ))}
            </div>
          </div>
        </div>
      </TodosContext.Provider>
  );
}

export default App;
