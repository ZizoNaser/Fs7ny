import React from 'react';
import './../../css/style.css';
import Input from './../form-input';

const Form = () => (
    <div className='box'>
        <form className='form'>
            <h1 className="heading-secondary">
                Search for hotel
            </h1>
            
                <Input type='input' placeholder='Location' id='location' label='Location' required />
                <Input type='input' placeholder='Start Date' id='start-date' label='Start Date' required />
                <Input type='input' placeholder='End Date' id='end-date' label='End Date' required />
            

            <div className='form__group form__btn-group'>
                <button className='btn btn--animated'>
                    <span className='btn__visible'> Search </span>
                    <span className='btn__invisible'> Now </span>
                </button>
            </div>
        </form>
    </div>
)

export default Form;