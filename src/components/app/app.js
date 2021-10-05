import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './app.module.scss';
import {StartPage} from '../pages';


export default class App extends React.Component {

    render() {
        return <Router>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/`} component={StartPage} exact/>
            </Switch>
        </Router>
    }
}