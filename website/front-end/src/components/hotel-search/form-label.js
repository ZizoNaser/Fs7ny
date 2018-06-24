import React from 'react';

const Label = (props) => {
    return(
        <div className = 'form__group'>
           <input
             type = {props.type}
             className = 'form__input'
             placeholder = {props.children} />

            <label htmlFor = {props.label} className = 'form__label'>
             {props.children}
            </label>

        </div>
    )
}