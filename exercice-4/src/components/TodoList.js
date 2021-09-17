import React from 'react';
import {connect} from 'react-redux';
import { completeTodo } from '../actions';
import Todo from './Todo';

function TodoList(props){

    const todoList = props.todos.map((todo, index)=><div className="item"><Todo todo={todo} key={'todo : '+index}/><input type="button" onClick={() => props.completeTodo(todo)} value="Done"/></div>);
    const totalTime = props.todos.reduce(((prevTime,newTime)=>prevTime+parseFloat(newTime.time)),0);
    
    return(
        <div className="list">
            <h3>To Do :</h3>
            {todoList}
            <h3>temps total pour réaliser les todos : {totalTime}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (todo) => dispatch(completeTodo(todo)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);