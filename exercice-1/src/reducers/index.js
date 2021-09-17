import {actions} from '../actions';

const defaultState = {
    text: "",
    button: true, 
}

export default function reducers(state = defaultState, action){
    switch(action.type){
        case actions.CHANGE_TOGGLEBUTTON_VALUE :
            return Object.assign({}, state, {
                button: !state.button,
            });
        case actions.CHANGE_TEXTFIELD_VALUE :
            return Object.assign({}, state, {
                text: action.value,
            });
        default:
            return state;
    }
}