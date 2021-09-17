export const actions = {
    ADD_TODO : 'ADD_TODO',
    COMPLETE_TODO : 'COMPLETE_TODO',
}

export function addTodo(content,time=0){
    return{
        type: actions.ADD_TODO,
        content: content,
        time: time,
    }
}

export function completeTodo(todo){
    return{
        type: actions.COMPLETE_TODO,
        todo: todo
    }
}