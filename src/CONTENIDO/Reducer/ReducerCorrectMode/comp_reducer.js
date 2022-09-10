import React from "react";
import { useReducer } from "react";
import {TodoReducer} from './intro-reducer'

const initialState=[{
    id: 1,
    todo: 'Hacer los challenges',
    done: false
}];

export const ReducerApp = () =>{
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)

    return(
        <>
        <h2>Reducer App</h2>
        </>
    )
}