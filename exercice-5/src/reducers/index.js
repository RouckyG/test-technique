import {actions} from '../actions';
import {calculate} from './calculate'

const defaultState = {
    expression : "",
}

const symbol= ['.','+','-','/','%','x'];

export default function reducers(state = defaultState, action){
    switch(action.type){
        case actions.ADD_SYMBOL :
            if(symbol.includes(action.key)){
                if(state.expression[(state.expression.length)-1] === action.key || state.expression.length === 0){
                    return state;
                }
                if(symbol.includes(state.expression[state.expression.length-1])){
                    return Object.assign({}, state, {
                        expression : state.expression.substring(0, state.expression.length - 1) + action.key
                    });
                }
            }
            if((action.key === '²' && isNaN(state.expression[state.expression.length-1])) || ( (!isNaN(action.key) || action.key === '√') && state.expression[state.expression.length-1] ==='²')){
                return state;
            }
            if((isNaN(action.key) && state.expression[state.expression.length-1] === '√') || ( !isNaN(state.expression[state.expression.length-1]) && action.key === '√')){
                return state;
            }
            return Object.assign({}, state, {
                expression: state.expression + action.key,
            });
            case actions.REMOVE_SYMBOL :
                return Object.assign({}, state, {
                    expression: state.expression.substring(0, state.expression.length - 1),
                });
            case actions.REMOVE_EXPRESSION :
                return Object.assign({}, state, {
                    expression: defaultState.expression,
                });
            case actions.CALCULATE_EXPRESSION :
                let result = calculate(state.expression)
                return Object.assign({}, state, {
                    expression: result,
                });
        default :
            return state;
    }
}