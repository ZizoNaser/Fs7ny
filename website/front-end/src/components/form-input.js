import React from 'react';
import './../css/style.css';

const Input = (props) => {
    let inputElement = null;
    switch (props.type) {
        case ('input'):
            inputElement = <input
                className='form__input'
                {...props} />
            break;
        default:
            inputElement = <input
                className='form__input'
                {...props} />
        
    }
    return (
        <div className='form__group'>
            <label className='form__label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;