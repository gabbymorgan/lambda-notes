import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        if (this.props.signedIn) {
            return (
                <Col xs="12" md="3" className="Menu">
                    <h1 className='Menu__heading'>Lambda Notes</h1>
                    <Link to="/notes">
                        <Button color="deoco" className="Button">View Your Notes</Button>
                    </Link>
                    <Link to="/create">
                        <Button color="deoco" className="Button">+ Create New Note</Button>
                    </Link>
                    <Link to="/signout">
                        <Button color="deoco" className="Button">Sign Out</Button>
                    </Link>
                </Col>
            )
        } else {
            return (
                <Col xs="12" md="3" className="Menu">
                    <h1 className='Menu__heading'>Lambda Notes</h1>
                    <Link to="/signin">
                        <Button color="deoco" className="Button">Sign In</Button>
                    </Link>
                    <Link to="/register">
                        <Button color="deoco" className="Button">Register</Button>
                    </Link>
                </Col>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        signedIn: state.userReducer.signedIn
    }
}

export default connect(mapStateToProps)(Menu);