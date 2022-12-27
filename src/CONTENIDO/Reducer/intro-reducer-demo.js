/*const initialState=[{
    id: 1,
    todo: 'Hacer los challenges',
    done: false
}];

const todoReducer = (state = initialState, action = {} ) => {
    if(action.type === '[TODO] add todo') { //mejor swtch
        return [...state, action.playload]
    }

    return state;
}

let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'avances proyecto',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    playload: newTodo,
}

todos = todoReducer(todos, addTodoAction)
console.log(todos);*/