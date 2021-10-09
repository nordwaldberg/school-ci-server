import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import Cog from '../../../shared/Cog/Cog';
import Play from '../../../shared/Play/Play';

const Header = ({repoName}) => {
    return (
        <header className={styles.pageHeader}>
            <h1 className={styles.repoName}>{repoName}</h1>
            <div className={styles.btnsContainer}>
                <button className={styles.runBuildBtn}>
                    <Play width="9" height="10" className={styles.runBtnIcon}/>
                    <p className={styles.runBtnText}>Run build</p>
                </button>
                <button className={styles.settingsBtn}>
                    <Link to="/settings" className={styles.btnLink}>
                        <Cog width="12" height="12" className={styles.btnIcon}/>
                    </Link>
                </button>
            </div>
        </header>
    );
};

export default Header;