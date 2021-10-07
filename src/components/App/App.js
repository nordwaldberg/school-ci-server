import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StartPage from '../Pages/StartPage/StartPage';
import SettingsPage from '../Pages/SettingsPage/SettingsPage';
import styles from './App.module.scss';


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/`} component={StartPage} exact/>
                    <Route path={`${process.env.PUBLIC_URL}/settings`} component={SettingsPage} exact/>
                </Switch>
            </Router>
        )
    }
}