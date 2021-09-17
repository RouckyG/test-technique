export const actions = {
    ADD_SYMBOL : 'ADD_SYMBOL',
    REMOVE_SYMBOL : 'REMOVE_SYMBOL',
    REMOVE_EXPRESSION : 'REMOVE_EXPRESSION',
    CALCULATE_EXPRESSION : 'CALCULATE EXPRESSION',
}

export function addSymbol(key){
    return{
        type: actions.ADD_SYMBOL,
        key: key,
    }
}

export function removeSymbol(){
    return{
        type: actions.REMOVE_SYMBOL,
    }
}

export function removeExpression(){
    return{
        type: actions.REMOVE_EXPRESSION,
    }
}

export function calculateExpression(){
    return{
        type: actions.CALCULATE_EXPRESSION,
    }
}