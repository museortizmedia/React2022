const TodoReducer = (state = initialState, action = {} ) => {
    switch(action.type){
        default:
            return initialState;
        case 'ABC':
        throw new Error('no existe esta accion')
        break;
    } 
}
//[...state, action.playload]