import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default (props) => {
    return (
        <Container>
            <Row>
                <Col className='Content__heading__col'>
                    <h4  className='Register__heading'>Welcome to Lambda Notes. Sign in to view your notes, or click register to sign up for a free account. </h4>
                </Col>
            </Row>
        </Container>
    )
}