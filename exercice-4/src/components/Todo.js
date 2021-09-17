import React from 'react';

function Todo(props){
    return <div>{props.todo.todoContent} : {props.todo.time}  jours</div>
}

export default Todo;