import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import NoteCard from '../NoteCard/NoteCard';
import Searchbar from '../Searchbar/Searchbar';
import { fetchNotes, sortNewest, sortOldest } from '../../actions/notes';
import './List.css';


class List extends Component {
    handleNewest() {
        this.props.sortNewest();
        this.props.history.push('/');
    }

    handleOldest() {
        this.props.sortOldest();
        this.props.history.push('/');
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
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
                        <Col key={note.id} className="List__card-Container" xs="12" md="6" xl="4">
                            <NoteCard note={note}/>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        sortedby: state.sortedby,
        visibleNotes: state.visibleNotes,
    }
}


export default connect(mapStateToProps, { fetchNotes, sortNewest, sortOldest })(List);