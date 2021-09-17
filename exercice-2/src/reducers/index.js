import {actions} from '../actions';

const defaultState = {
    text: "",
    button: true, 
}

export default function reducers(state = defaultState, action){
    switch(action.type){
        case actions.SUBMIT_CHANGE :
            return Object.assign({}, state, {
                text: action.value,
            });
        default:
            return state;
    }
}