import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { signOut } from '../../actions/user'; 

const SignOut = (props) => {
    props.signOut();
    return (
        <Container>
            <Row className='Content__heading'>
                <Col className='Content__heading__col'>
                    <h4>See you soon!</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(null, { signOut })(SignOut);