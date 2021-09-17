import React from "react";
import {connect} from "react-redux";

function Expression(props){

    const expression = props.expression
    console.log(expression)

    return <div className='expression'>{expression}</div>
}

const mapStateToProps = (state) => ({
    expression : state.expression,
})

export default connect(mapStateToProps)(Expression);