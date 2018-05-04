import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Input, Button } from 'reactstrap';

import { signIn } from '../../actions/user';
import { fetchNotes } from '../../actions/notes';

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
    }

    render() {
        return (
            <Container>
                <Form>
                    <Input type='text' name='username' onChange={this.handleChange.bind(this)}/>
                    <Input type='password' name='password' onChange={this.handleChange.bind(this)}/>
                    <Button onClick={() => this.handleSubmit()}>Sign In</Button>
                </Form>
            </Container>
        )
    }
}

export default connect(null, { fetchNotes, signIn })(Register)