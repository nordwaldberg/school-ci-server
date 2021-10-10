import React from 'react';
import styles from './Header.module.scss';
import Play from '../../../shared/Play/Play';
import SettingsButton from '../../../shared/SettingsButton/SettingsButton';


const Header = ({repoName, handleClick, value}) => {
    return (
        <header className={styles.pageHeader}>
            <h1 className={styles.repoName}>{repoName}</h1>
            <div className={styles.btnsContainer}>
                <button className={styles.runBuildBtn}
                        onClick={handleClick}
                        value={value}
                >
                    <Play width="9" height="10" className={styles.runBtnIcon}/>
                    <p className={styles.runBtnText}>Run build</p>
                </button>
                <SettingsButton/>
            </div>
        </header>
    );
};

export default Header;