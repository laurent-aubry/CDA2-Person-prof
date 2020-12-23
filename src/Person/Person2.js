import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>Je suis {props.name} et j'ai {props.age} ans !</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;