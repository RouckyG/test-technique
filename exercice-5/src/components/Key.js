import React from 'react';

export default function Key(props){
    const {text,onClick} = props;

    return <button onClick={()=>onClick(text)}>{text}</button>
}