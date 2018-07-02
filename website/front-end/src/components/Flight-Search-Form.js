import React from 'react';
import './../css/style.css';
import Input from './form-input';


const Form = () => {
    return(
    <div className='box'>
        <form className='form'>
            <h1 className="heading-secondary">
                Find a Flight
            </h1>
            
                <Input inputtype = 'input' type='text' placeholder='Depart' id='Depart' for = 'Depart' required />
                <Input inputtype = 'input' type='text' placeholder='Destination' id='Destination' for = 'Destination' required />
                <Input inputtype = 'input' type='date' id='date' for = 'start-date' label='Date' required />

     

            <div className='form__group form__btn-group'>
                <button className='btn btn--animated'>
                    <span className='btn__visible'> Search </span>
                    <span className='btn__invisible'> Now </span>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Form;