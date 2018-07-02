import React, { Component } from 'react';
import Input from './../components/form-input';
import Button from './../components/search-button';
import './../css/style.css';

class Form extends Component {
    state = {
        userForm: {
            Departure: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'Depart',
                    id: 'Depart',
                },
                value: '',
                label: '',
                for: 'Depart',
                validation:{
                    required: true
                },
                valid: false
            },

            Destination: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'Destination',
                    id: 'Destination',    
                },

                value: '',
                label: '',
                for: 'Destination',
                validation:{
                    required: true
                },
                valid: false
            },

            Start_Date: {
                inputType: 'input',
                elementSetUp: {
                    type: 'date',
                    id: 'date',
                },

                value: '',
                label: 'Date',
                for: 'start-date',
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

    flightDataHandler = (event) => {
        // prevents sending request automatically, in order not to reload the page
        event.preventDefault();
        const data = {};
        for(let identifier in this.state.userForm){
            data[identifier] = this.state.userForm[identifier].value; 
        } 

        const flight = {
            flightData: data
        }
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
            <form className='form' onSubmit = {this.flightDataHandler}>
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
            </form>
        );

        return (
            <main class="hotel-search-view">
            <div className='box'>
                <h1 className = 'heading-secondary'>
                  Find a Flight
                </h1>   
                {form}
                <Button name = 'Find' disabled={!this.state.formIsValid}/>
            </div>
            </main>
        );
    }
}

export default Form;