import {actions} from '../actions';

const defaultState = {
    result : {},
}

export default function reducers(state = defaultState, action){
    switch(action.type){
        case actions.FIND_CLOSEST :
            let result = action.list[0];
            let difference =  action.list[0].x < action.value ? action.value - action.list[0].x : action.list[0].x - action.value;
        
            for(let i = 1; i < action.list.length ; i++){
        
                let newDifference = action.list[i].x < action.value ? action.value - action.list[i].x : action.list[i].x - action.value;
        
                if(newDifference < difference){
                    result = action.list[i];
                    difference = newDifference; 
                }
            }
            return Object.assign({}, state, {
                result: result,
            });
        default:
            return state;
    }
}