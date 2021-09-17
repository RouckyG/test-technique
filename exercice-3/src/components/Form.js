import React, {useState} from 'react';
import {connect} from 'react-redux';
import { findClosest } from '../actions';

function Form(props){

    const tempList =[]

    const [list, setList] = useState(tempList);
    const [length,setLength] = useState(2);
    const [value,setValue] = useState(1);
    const inputList = []
    
    console.log('test',tempList,'result', props.result);

    const updateList = (index,letter) => e =>{
        const newList = [...list];
        letter == 'x'? newList[index].x = e.target.value : newList[index].y  = e.target.value
        setList(newList);
    }

    for(let i = 0 ; i < length ; i++){
        tempList.push({x:0,y:0})
        inputList.push(<div>
            x : <input type="number" onChange={()=> updateList(i,"x")}/>
            y : <input type="number" onChange={()=> updateList(i,"y")}/>
        </div>)
    }

    return (
        <div>
            <form>
                <input type="number" onChange={(e)=>(e.target.value >= 1 ? setLength(e.target.value) : setLength(1))}></input>
                {inputList}
                <input type="number" onChange={(e)=> setValue(parseInt(e.target.value))}/>
                <input type="button" onClick={() => props.findClosest(list,value)} value="Find"/>
            </form>
            result = x:{props.result.x}, y:{props.result.y}
        </div>
        )
}

const mapStateToProps = (state) => ({
    result: state.result,
})

const mapDispatchToProps = (dispatch) => ({
    findClosest: (list,value) => dispatch(findClosest(list,value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Form);