import React from 'react';
import './Person.css';

const person = ( props ) => {
    return (
        <div onClick={props.click} className="grid-item">
            Hey! I'm {props.name}
            <div>             
                click here to know my shifts!
            </div>
        </div>
    )
};

export default person;