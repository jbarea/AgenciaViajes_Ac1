import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import IndexPage from '@pages/IndexPage';
import LoginPage from '@pages/LoginPage';

export default class Enrouter extends React.Component{

    render(){
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={IndexPage}/>      
                <Route path="/login" component={LoginPage}/>      
              </Switch>
            </Router>
        );
    }
}
