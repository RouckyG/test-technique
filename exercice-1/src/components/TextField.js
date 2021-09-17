import React from 'react';
import {connect} from 'react-redux';
import {changeTextFieldValue} from '../actions';

function TextField(props){

    return (
        <input type="text" onChange={(e)=>props.onChange(e.target.value)} placeholder="ecrivez quelque chose"/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch(changeTextFieldValue(value)),
})

export default connect(null,mapDispatchToProps)(TextField);