import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default (props) => {
    return (
        <Container>
            <Row className='Content__heading'>
                <Col className='Content__heading__col'>
                    <h4>Welcome to Lambda Notes. Sign in to view your notes, or click register to sign up for a free account. </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => props.history.push('/register')}>Register</Button>
                    <Button onClick={() => props.history.push('/signin')}>Sign In</Button>
                </Col>
            </Row>
        </Container>
    )
}