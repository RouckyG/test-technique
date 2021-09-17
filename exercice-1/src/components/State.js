import React from 'react';
import {connect} from 'react-redux';

function State(props){

    const text = props.textValue;
    const button = props.button;
    
    return (
        <div>
            <h2>state :</h2>
            <h3>ToggleButton = {button ? "true" : "false"}</h3>
            <h3>TextField = {text}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    textValue: state.text,
    button: state.button,
})


export default connect(mapStateToProps)(State);