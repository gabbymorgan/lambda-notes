import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';

import NoteCard from '../NoteCard/NoteCard';
import Searchbar from '../Searchbar/Searchbar';
import { fetchNotes, sortNewest, sortOldest } from '../../actions/notes';
import './List.css';


class List extends Component {
    handleNewest() {
        this.props.sortNewest();
        this.props.history.push('/notes');
    }

    handleOldest() {
        this.props.sortOldest();
        this.props.history.push('/notes');
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        if (this.props.signedIn) {
            return (
                <Container className="Content">
                    <Row className="Content__heading List__heading">
                        <Col xs="12" md="2" className="Content__heading__col">
                            <h4>Your Notes:</h4>
                        </Col>
                        <Col xs="12" md="6">
                            <Searchbar/>
                        </Col>
                        <Col xs="6" md="2">
                            <h4 className="Options__link" onClick={() => this.handleNewest()}>newest</h4>
                        </Col>
                        <Col xs="6" md="2">
                            <h4 className="Options__link" onClick={() => this.handleOldest()}>oldest</h4>
                        </Col>
                    </Row>
                    <Row className="List__content">
                        {this.props.visibleNotes.map(note => {
                            return (
                                <Col xs='12' md='6' xl='4'className="List__CardContainer">
                            <NoteCard key={note._id} note={note}/>
                            </Col>
                            )
                        })}
                    </Row>
                </Container>
            );
        } else if (this.props.authFail) {
            return (
                <Container>
                <h2 className="Content__heading List__heading">Username/password combination failed. Please try again.</h2>
                </Container>
            );
        } else {
            return (
            <Container>
                <h2 className="Content__heading List__heading">Please sign in to view your notes, or register for an account.</h2>
            </Container>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        sortedby: state.notesReducer.sortedby,
        visibleNotes: state.notesReducer.visibleNotes,
        signedIn: state.userReducer.signedIn,
        authFail: state.userReducer.authFail,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNotes, sortNewest, sortOldest }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
