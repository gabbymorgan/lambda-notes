import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { createNote, search } from '../../actions/notes';

import Cookies from 'js-cookie';
import Menu from '../Menu/Menu';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';
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
          <Col xs='12' md='9' className="ContentArea">
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signout" component={SignOut}/>
            <Route exact path="/notes" component={List}/>
            <Route path="/notes/:id" component={Note}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/create" component={Create}/>
          </Col>
        </Row>
    );
  }
}

export default connect(null, { createNote, search })(App);
