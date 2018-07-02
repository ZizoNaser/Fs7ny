import React from 'react';
import './../css/style.css';

const Input = (props) => {
    let inputElement = null;
    let inputClass = ['form__input'];

    if(props.invalid){
       inputClass.push('invalid');
    }

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input
                className= {inputClass.join(':')}
                {...props.elementSetUp}
                value = {props.value}
                onChange = {props.changed}/>
            break;
        default:
            inputElement = <input
                className='form__input'
                {...props.elementSetUp}
                value = {props.value}
                onChange = {props.changed} />
        
    }
    return (
        <div className='form__group'>
            <label htmlFor = {props.for} className='form__label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;