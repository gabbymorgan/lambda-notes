import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Input, Button, Label } from 'reactstrap';

import { register } from '../../actions/user';
import './Register.css';

class Register extends Component {
    state = {
        firstName: '', 
        lastName: '',
        username: '',
        password: '',
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    }

    handleSubmit() {
        const user = { ...this.state };
        this.props.register(user);
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
                    <Label to='password'>Password</Label>
                    <Input type='password' name='password' onChange={this.handleChange.bind(this)}/>
                    <Button className="Button Create__button" onClick={() => this.handleSubmit()}>Give me notes!</Button>
                </Form>
            </Container>
        )
    }
}

export default connect(null, { register })(Register)