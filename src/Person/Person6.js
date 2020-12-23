import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>Je suis {props.name} et j'ai {props.age} ans !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}  // 2 way binding : start with the correct value
        </div>
    )
};

export default person;