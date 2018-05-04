import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Input, Button, Label } from 'reactstrap';

import { signIn } from '../../actions/user';
import { fetchNotes } from '../../actions/notes';
import './SignIn.css';

class Register extends Component {
    state = {
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
        this.props.signIn(user)
        .then(() => this.props.history.push('/notes'));
    }

    render() {
        return (
            <Container>
                <h2 className="Register__heading">Welcome back! Please sign in to view your notes.</h2>
                <Form className="Create__form">
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

export default connect(null, { fetchNotes, signIn })(Register)