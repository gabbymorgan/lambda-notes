import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { createNote, search } from '../../actions/notes';

import Menu from '../Menu/Menu';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';
import List from '../List/List';
import Edit from '../Edit/Edit';
import Create from '../Create/Create';
import Note from '../Note/Note';
import './App.css';

class App extends Component {
  render() {
    return (
        <Row className="Container">
          <Menu />
          <Col className="ContentArea">
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/signin" component={SignIn}/>
            <Route exact path="/notes" component={List}/>
            <Route path="/notes/:id" component={Note}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/create" component={Create}/>
          </Col>
        </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { createNote, search })(App);
