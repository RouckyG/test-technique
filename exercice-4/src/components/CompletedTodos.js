import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

function completedTodos(props){

    const todoList = props.todos.map((todo,index)=><div className="item"><Todo todo={todo} key={'completed todo : '+index}/></div>);
    const totalTime = props.todos.reduce(((prevTime,newTime)=>prevTime+parseInt(newTime.time)),0);

    return(
        <div className="list">
            <h3>Done :</h3>
            {todoList}
            <h3>temps total effectué : {totalTime}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.completedTodos,
})

export default connect(mapStateToProps)(completedTodos);