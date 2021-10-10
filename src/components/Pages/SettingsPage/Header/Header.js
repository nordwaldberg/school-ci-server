import React from 'react';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.text}>School CI server</h1>
        </header>
    );
};

export default Header;