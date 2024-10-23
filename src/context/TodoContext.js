import { createContext,useContext } from "react";

export const TodosContext=createContext({
    todos:[],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    iscomplate:(id)=>{}
})


export const usetodo=() => {
    return useContext(TodosContext)
}

