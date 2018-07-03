import React, { Component } from 'react';
import Input from './../components/form-input';
import Button from './../components/search-button';
import {Route} from 'react-router-dom';
import Hotels from './Search-results/hotel-results';
import axios from 'axios';
import './../css/style.css';

class Form extends Component {
    state = {
        userForm: {
            Location: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'Location',
                    id: 'location',
                },
                value: '',
                label: '',
                for: 'location',
                validation:{
                    required: true
                },
                valid: false
            },

            Start_Date: {
                inputType: 'input',
                elementSetUp: {
                    type: 'date',
                    placeholder: 'Start Date',
                    id: 'start-date',    
                },

                value: '',
                label: 'Start Date',
                for: 'start-date',
                validation:{
                    required: true
                },
                valid: false
            },

            End_Date: {
                inputType: 'input',
                elementSetUp: {
                    type: 'date',
                    id: 'end-date',
                },

                value: '',
                label: 'End Date',
                for: 'end-date',
                validation:{
                    required: true
                },
                valid: false
            },
        },
        formIsValid: false,
    }

    isValid = (value, rule) => {
        let Valid = true
        if(rule.required){
            Valid = value.trim() !== '' && Valid;
        }
        return Valid;
    }

    HotelDataHandler = (event) => {
        // prevents sending request automatically, in order not to reload the page
        event.preventDefault();
        const data = {};
        for(let identifier in this.state.userForm){
            data[identifier] = this.state.userForm[identifier].value; 
        } 

        const hotel = {
            HotelData: data
        }
        //TODO: Add api url
        axios.get('')
        .then(response => {

        })
        this.props.history.push('/hotels');
        
    }

/** Handling input in form elements **/
    changeHandler = (event, key) => {
       /** form with user-input **/ 
        const updatedUserForm = {
            ...this.state.userForm
        };

        /** data of each element in the form */
        const updatedFormElements = {
            ...updatedUserForm[key]
        };

        updatedFormElements.value = event.target.value;
        updatedFormElements.valid = this.isValid(updatedFormElements.value, updatedFormElements.validation);
        updatedUserForm[key] = updatedFormElements;
        console.log(updatedFormElements);
        let formIsValid = true;
        for (let id in updatedUserForm)
            formIsValid = updatedUserForm[id].valid && formIsValid;
        this.setState({userForm:updatedUserForm, formIsValid: formIsValid});
    }

    render() {
        const formElements = [];
        for (let key in this.state.userForm) {
            formElements.push({
                id: key,
                setUp: this.state.userForm[key],
            })
        }

        let form = (
            <form className='form' onSubmit = {this.HotelDataHandler}>
                {formElements.map(element => (
                    <Input
                        key = {element.id} 
                        inputType={element.setUp.inputType}
                        elementSetUp={element.setUp.elementSetUp}
                        value={element.setUp.value} 
                        label = {element.setUp.label}
                        for = {element.setUp.for}
                        invalid = {!element.setUp.valid}
                        changed = {(event) =>this.changeHandler(event, element.id)} />
                ))}
                <Button name = 'Search' invisible = 'Now' disabled={!this.state.formIsValid}/>
            </form>
        );

        return (
            <div className='box'>
                <h1 className = 'heading-secondary'>
                Search for hotel
                </h1>   
                {form}
                
                
            </div>
        );
    }
}

export default Form;