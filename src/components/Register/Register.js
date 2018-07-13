import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Input, Label } from 'reactstrap';

import { register } from '../../actions/user';
import './Register.css';

class Register extends Component {
    state = {
        firstName: '', 
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        passwordMatch: true,
        passwordLengthOk: true,
    }

    handleChange(event) {
        let password;
        let confirmPassword;
        switch(event.target.name) {
            case 'password':
                password = event.target.value;
                confirmPassword = this.state.confirmPassword;
                break;
            case 'confirmPassword':
                password = this.state.password;
                confirmPassword = event.target.value;
                break;
            default:
                password = this.state.password;
                confirmPassword = this.state.confirmPassword;
                break;
        }
        const passwordLengthOk = !password || password.length >= 8;
        const passwordMatch = password === confirmPassword;
        this.setState({
            passwordLengthOk,
            passwordMatch,
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { 
            firstName, 
            lastName, 
            email, 
            username, 
            password, 
            passwordLengthOk, 
            passwordMatch 
        } = { ...this.state };

        if (!passwordLengthOk) {
            //password too short modal
        } else if (!passwordMatch) {
            //passwords don't match modal
        }
        else {
            const user = {
                firstName,
                lastName,
                email,
                username,
                password,
            }
            this.props.register(user)
            .then(() => this.props.history.push('/signin'))
            .catch(err => {
                this.setState({
                    registerFailed: true,
                });
            });
        }
    }

    render() {
        return (
            <Container>
                <h2 className="Register__heading">Register for your free Lambda Notes account!</h2>
                <Form className="Create__form">
                    <Label to='firstName'>First Name</Label>
                    <Input type='text' name='firstName' onChange={this.handleChange.bind(this)}/>
                    <Label to='lastName'>Last Name</Label>
                    <Input type='text' name='lastName' onChange={this.handleChange.bind(this)}/>
                    <Label to='username'>Username</Label>
                    <Input type='text' name='username' onChange={this.handleChange.bind(this)}/>
                    <Label to='email'>Email</Label>
                    <Input type='text' name='email' onChange={this.handleChange.bind(this)}/>
                    <Label to='password'>Password</Label>
                    <Input type='password' name='password' onChange={this.handleChange.bind(this)}/>
                    <p>{this.state.passwordLengthOk ? '' : 'Password is too short.'}</p>
                    <Label to='confirmPassword'>Confirm Password</Label>
                    <Input type='password' name='confirmPassword' onChange={this.handleChange.bind(this)}/>
                    <p>{this.state.passwordMatch ? '' : 'Passwords do not match.'}</p>
                    <button className="Button Create__button" onClick={this.handleSubmit.bind(this)}>Give me notes!</button>
                </Form>
            </Container>
        )
    }
}

export default connect(null, { register })(Register)