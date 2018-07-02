import React from 'react';
import './../css/style.css';

const Button = (props) => (
    <div className='form__group form__btn-group'>
        <button className='btn btn--animated' disabled = {props.disabled}>
            <span className='btn__visible'> {props.name} </span>
            <span className='btn__invisible'> {props.invisible} </span>
        </button>
    </div>
)

export default Button;