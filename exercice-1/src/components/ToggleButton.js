import React from 'react';
import {connect} from 'react-redux';
import {changeToggleButtonValue} from '../actions';

function ToggleButton(props){
    const buttonValue = props.buttonValue
    return (
        <button onClick={props.changeToggleButtonValue}>{buttonValue? "true":"false"}</button>
    )
}

const mapStateToProps = (state) => ({
    buttonValue: state.button,
})

const mapDispatchToProps = (dispatch) => ({
    changeToggleButtonValue: (value) => dispatch(changeToggleButtonValue(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ToggleButton);;