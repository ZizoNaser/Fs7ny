import React, { Component } from 'react';
import Input from './../components/form-input';
import Button from './../components/button';
import axios from 'axios';
import Aux from '../hoc/Aux';
import Spinner from '../components/spinner/spinner';
import './../css/style.css';


class LogIn extends Component {
    state = {
        LoginForm: {
            Username: {
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
                    minLength: 6
                },
                valid: false
            },

        },
        formIsValid: false,
        loading: false,
    }

    isValid = (value, rule) => {
        let Valid = true
        if (rule.required) {
            Valid = value.trim() !== '' && Valid
            console.log(Valid)
        }
        if (rule.minLength) {
            Valid = value.length >= rule.minLength && Valid
        }
        return Valid;
    }

    userDataHandler = (event) => {
        // prevents sending request automatically, in order not to reload the page
        event.preventDefault();
        this.setState({ loading: true })
        const data = {};
        for (let identifier in this.state.LoginForm) {
            data[identifier] = this.state.LoginForm[identifier].value;
        }

        const user = {
            userData: data
        }

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
        const updatedLoginForm = {
            ...this.state.LoginForm
        };

        /** data of each element in the form */
        const updatedFormElements = {
            ...updatedLoginForm[key]
        };

        updatedFormElements.value = event.target.value;
        updatedFormElements.valid = this.isValid(updatedFormElements.value, updatedFormElements.validation);
        updatedLoginForm[key] = updatedFormElements;
        console.log(updatedFormElements);
        let formIsValid = true;
        for (let id in updatedLoginForm)
            formIsValid = updatedLoginForm[id].valid && formIsValid;
        this.setState({ LoginForm: updatedLoginForm, formIsValid: formIsValid });
    }

    signUpClicked = () => {
        this.props.history.replace('/sign-up');
    }

    // loginClicked = () => {
    //     this.props.history.replace('/');
    // }


    render() {
        const formElements = [];
        for (let key in this.state.LoginForm) {
            formElements.push({
                id: key,
                setUp: this.state.LoginForm[key],
            })
        }

        let form = (
            <Aux>
                <h1 className='heading-secondary'>Welcome</h1>
                <form className='form' >
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
                            name='Log In'
                            class='btn btn--blue'
                            clicked={this.userDataHandler}
                            disabled={!this.state.formIsValid} />
                        <Button
                            name='Sign up'
                            class='btn btn--green'
                            clicked={this.signUpClicked} />
                    </div>
                </form>
            </Aux>
        );

        if (this.state.loading)
            form = <Spinner />

        return (
            <main className='login-view'>
                <div className='box'>
                    {form}
                </div>
            </main>
        )
    }
}

export default LogIn;