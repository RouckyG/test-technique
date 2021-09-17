import {actions} from '../actions';

const defaultState = {
    todos : [
        {
            todoContent : 'Faire mon premier todo!',
            time : 1,
        }
    ],
    completedTodos : [],
}

export default function reducers(state = defaultState, action){
    switch(action.type){
        case actions.ADD_TODO :
            return Object.assign({}, state, {
                todos : [...state.todos, {todoContent : action.content, time : action.time}],
            });
        case actions.COMPLETE_TODO :
            return Object.assign({}, state, {
                completedTodos : [...state.completedTodos, action.todo],
                todos : [
                    ...state.todos.slice(0, state.todos.indexOf(action.todo)),
                    ...state.todos.slice(state.todos.indexOf(action.todo) + 1)]
            });
        default :
        return state;
    }
}