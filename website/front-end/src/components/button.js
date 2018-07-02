import React from 'react';
import './../css/style.css';

const Button = (props) => (
    <button className={props.class} onClick={props.clicked} disabled = {props.disabled}>
        <span className='btn__visible'> {props.name} </span>
    </button>

)

export default Button;