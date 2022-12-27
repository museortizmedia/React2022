/*
import { useEffect, useReducer } from "react"

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    console.log("init encontrado es: "+init)
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
}
*/