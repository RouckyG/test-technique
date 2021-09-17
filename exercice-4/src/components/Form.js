import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

function Form(props){

    const [todoContent, setTodoContent] = useState("");
    const [todotime,setTime] = useState(0);

    return (
        <form>
            <div>
                <label>Tache à faire : </label>
                <input type="text" placeholder="ecrivez quelque chose" onChange={(e)=>setTodoContent(e.target.value)}/>
            </div>
            <div>
                <label>Temps de la tache : </label>
                <input type="number" onChange={(e)=>setTime(e.target.value)} unit='jours'/>Jours
            </div>
            <input type="button" onClick={() => props.addTodo(todoContent,todotime)} value="Save"/>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (content,time) => dispatch(addTodo(content,time)),
})

export default connect(null,mapDispatchToProps)(Form);