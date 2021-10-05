import React from 'react';
import styles from './app.module.scss';
import cog from '../../icons/cog.svg';

export default class App extends React.Component {
    render() {
        return <div>
            <img src={cog}/>
            <p>Hello, I'm div</p>
        </div>
    }
}