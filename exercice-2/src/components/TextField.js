import React, {useState} from 'react';
import {connect} from 'react-redux';
import {submitChange} from '../actions';

function TextField(props){

    const [text, setText] = useState("");

    return (
        <form>
            <input type="text" placeholder="ecrivez quelque chose" onChange={(e)=>setText(e.target.value)}></input>
            <input type="button" onClick={() => props.submitChange(text)} value="Save"/>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    submitChange: (value) => dispatch(submitChange(value)),
})

export default connect(null,mapDispatchToProps)(TextField);