import React from 'react';
import styles from './Header.module.scss';
import SettingsButton from '../../../shared/SettingsButton/SettingsButton';


const Header = () => {
    return (
        <header className={styles.pageHeader}>
            <h1 className={styles.text}>School CI server</h1>
            <SettingsButton adaptive/>
        </header>
    );
};

export default Header;