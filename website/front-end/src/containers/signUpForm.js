import React, { Component } from 'react';
import Input from './../components/form-input';
import Button from './../components/button';
import './../css/style.css';
import axios from 'axios';
import Spinner from '../components/spinner/spinner';
import Aux from '../hoc/Aux';

class SignUp extends Component {
    state = {
        signupForm: {
            First_Name: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'First Name',
                    id: 'first-name',
                },
                value: '',
                label: '',
                for: 'first-name',
                validation: {
                    required: true
                },
                valid: false
            },

            Last_Name: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'Last Name',
                    id: 'last-name',
                },

                value: '',
                label: '',
                for: 'last-name',
                validation: {
                    required: true
                },
                valid: false
            },

            User_Name: {
                inputType: 'input',
                elementSetUp: {
                    type: 'text',
                    placeholder: 'User Name',
                    id: 'user-name',
                },

                value: '',
                label: '',
                for: 'user-name',
                validation: {
                    required: true
                },
                valid: false
            },

            Email: {
                inputType: 'input',
                elementSetUp: {
                    type: 'email',
                    placeholder: 'E-mail',
                    id: 'email',
                },

                value: '',
                label: '',
                for: 'email',
                validation: {
                    required: true
                },
                valid: false
            },

            Password: {
                inputType: 'input',
                elementSetUp: {
                    type: 'password',
                    placeholder: 'Password',
                    id: 'password',
                },

                value: '',
                label: '',
                for: 'password',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false
            },
        },

        formIsValid: false,
        loading: false,
    }

    isValid = (value, rule) => {
        let Valid = true;
        if (rule.required) {
            Valid = value.trim() !== '' && Valid;
        }
        if (rule.minLength) {
            Valid = value.length >= rule.minLength && Valid;
        }
        return Valid;
    }

    userDataHandler = (event) => {
        // prevents sending request automatically, in order not to reload the page
        event.preventDefault();
        this.setState({ loading: true })
        const data = {};
        for (let identifier in this.state.signupForm) {
            data[identifier] = this.state.signupForm[identifier].value;
        }

        const user = {
            userData: data
        }
        //TODO: add api url without http://localhost:3000 as i made it default in index.js
        axios.post('', user)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.replace('/');
            })
        // .catch(error => {
        //     this.setState({ loading: false })
        // })
    }

    /** Handling input in form elements **/
    changeHandler = (event, key) => {
        /** form with user-input **/
        const updatedSignupForm = {
            ...this.state.signupForm
        };

        /** data of each element in the form */
        const updatedFormElements = {
            ...updatedSignupForm[key]
        };

        updatedFormElements.value = event.target.value;
        updatedFormElements.valid = this.isValid(updatedFormElements.value, updatedFormElements.validation);
        updatedSignupForm[key] = updatedFormElements;
        console.log(updatedFormElements);
        let formIsValid = true;
        for (let id in updatedSignupForm)
            formIsValid = updatedSignupForm[id].valid && formIsValid;
        this.setState({ signupForm: updatedSignupForm, formIsValid: formIsValid });
    }

    // signUpClicked = () => {
    //     this.props.history.replace('/');
    // }

    render() {
        const formElements = [];
        for (let key in this.state.signupForm) {
            formElements.push({
                id: key,
                setUp: this.state.signupForm[key],
            })
        }

        let form = (
            <div className='box'>
                <h1 className='heading-secondary'>Welcome</h1>
                <form className='form' onSubmit={this.userDataHandler}>
                    {formElements.map(element => (
                        <Input
                            key={element.id}
                            inputType={element.setUp.inputType}
                            elementSetUp={element.setUp.elementSetUp}
                            value={element.setUp.value}
                            label={element.setUp.label}
                            for={element.setUp.for}
                            invalid={!element.setUp.valid}
                            changed={(event) => this.changeHandler(event, element.id)} />
                    ))}
                    <div className='form__group form__btn-group'>
                        <Button
                            name='Sign up'
                            class='btn btn--green'
                            disabled={!this.state.formIsValid} />
                    </div>
                </form>
                </div>
        );

        if (this.state.loading)
            form = <Spinner />

        return (
            <main className='login-view'>
                
                    {form}
                
            </main>
        );
    }
}

export default SignUp;