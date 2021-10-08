import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import Cog from '../../../shared/Cog/Cog';

const Header = () => {
    return (
        <header className={styles.pageHeader}>
            <h1 className={styles.text}>School CI server</h1>
            <button className={styles.settingsBtn}>
                <Link to="/settings" className={styles.btnLink}>
                    <Cog width="12" height="12" className={styles.btnIcon}/>
                    <p className={styles.btnText}>Settings</p>
                </Link>
            </button>
        </header>
    );
};

export default Header;