import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Input, Button } from 'reactstrap';

import { register } from '../../actions/user';

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
                <Form>
                    <Input type='text' name='firstName' onChange={this.handleChange.bind(this)}/>
                    <Input type='text' name='lastName' onChange={this.handleChange.bind(this)}/>
                    <Input type='text' name='username' onChange={this.handleChange.bind(this)}/>
                    <Input type='password' name='password' onChange={this.handleChange.bind(this)}/>
                    <Button onClick={() => this.handleSubmit()}/>
                </Form>
            </Container>
        )
    }
}

export default connect(null, { register })(Register)