import React, { useReducer, useEffect } from "react";
import { ReducerAppAgregar } from "./comp/agregar_todo";
import {TodoReducer} from './reducer'
import { ReducerAppListado } from "./comp/listado_todo";
import * as types from './types'

/*
INICIALIZAR POR LOCAL STORAGE
*/
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}


export const ReducerApp = () =>{
    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const newToDo = (todo) =>{
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        
        console.log ( TodoReducer(todos, action) )
        dispatch(todos)
    }
    
    return(
        <>
        <div className="container text-center p-3">
        <h2>TodoApp: {todos.length}, <small>Pendientes: 2</small></h2>
        </div>
        <hr/>
        <button onClick={() => localStorage.removeItem('todos')}>Delete All</button>
        <div className="row">
            <ReducerAppListado todos={todos}/>
            <ReducerAppAgregar add={newToDo}/>
        </div>
        </>
    )
}