import React from 'react';
import './Input.css';
const Input=(props)=>{
    

    return(
        <input onChange={props.onChange} className="Input" type="file"  placeholder="Choose" />
    );
}

export default Input;