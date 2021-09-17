import React from 'react';
import {connect} from 'react-redux';

function State(props){

    const text = props.textValue;
    
    return (
        <div>
            <h2>state :</h2>
            <h3>TextField = {text}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    textValue: state.text,
})


export default connect(mapStateToProps)(State);