import * as types from './types'

export const TodoReducer = (state = {}, action = {} ) => {
    switch(action.type){
        default:
        throw new Error('no se reconoce La accion'+action.type);
        case types.CREATE_TODO:
            return [...state, action.playload]
        break;
        case types.DELETE_TODO:
        break;
        case types.TACH_TODO:
        break;
    }
    return state;
}
/*
const newTodo = {
    id: 2,
    todo: 'avances proyecto',
    done: false
}
*/