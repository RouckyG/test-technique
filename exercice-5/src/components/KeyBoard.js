import React from 'react';
import {connect} from 'react-redux';
import Key from './Key';
import { addSymbol, removeSymbol, removeExpression, calculateExpression } from '../actions';

function KeyBoard(props){
    return <table>
        <tbody>
            <tr>
                <td><Key text=" " onClick={()=>null}/></td>
                <td><Key text=" " onClick={()=>null}/></td>
                <td><Key text=" " onClick={()=>null}/></td>
                <td><Key text=" " onClick={()=>null}/></td>
                <td><Key text="%" onClick={props.addSymbol}/></td>
            </tr>
            <tr>
                <td><Key text="²" onClick={props.addSymbol}/></td>
                <td><Key text="7" onClick={props.addSymbol}/></td>
                <td><Key text="8" onClick={props.addSymbol}/></td>
                <td><Key text="9" onClick={props.addSymbol}/></td>
                <td><Key text="/" onClick={props.addSymbol}/></td>
            </tr>
            <tr>
                <td><Key text="&#8730;" onClick={props.addSymbol}/></td>
                <td><Key text="4" onClick={props.addSymbol}/></td>
                <td><Key text="5" onClick={props.addSymbol}/></td>
                <td><Key text="6" onClick={props.addSymbol}/></td>
                <td><Key text="x" onClick={props.addSymbol}/></td>
            </tr>
            <tr>
                <td><Key text="C" onClick={props.removeSymbol}/></td>
                <td><Key text="1" onClick={props.addSymbol}/></td>
                <td><Key text="2" onClick={props.addSymbol}/></td>
                <td><Key text="3" onClick={props.addSymbol}/></td>
                <td><Key text="-" onClick={props.addSymbol}/></td>
            </tr>
            <tr>
                <td><Key text="AC" onClick={props.removeExpression}/></td>
                <td><Key text="0" onClick={props.addSymbol}/></td>
                <td><Key text="." onClick={props.addSymbol}/></td>
                <td><Key text="=" onClick={props.calculateExpression}/></td>
                <td><Key text="+" onClick={props.addSymbol}/></td>
            </tr>
        </tbody>
    </table>
}

const mapDispatchToProps = (dispatch) => ({
    addSymbol: (text) => dispatch(addSymbol(text)),
    removeSymbol: () => dispatch(removeSymbol()),
    removeExpression: () => dispatch(removeExpression()),
    calculateExpression: () => dispatch(calculateExpression()),
});

export default connect(null,mapDispatchToProps)(KeyBoard);