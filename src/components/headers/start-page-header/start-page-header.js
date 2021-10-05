import React from 'react';
import styles from './start-page-header.module.scss';
import cog from '../../../icons/cog.svg';

const StartPageHeader = () => {
    return (
        <header className={styles['header']}>
            <h1 className={styles['header__text']}>School CI server</h1>
            <button className={styles['header__btn']}>
                <img className={styles['header__btn__icon']}src={cog}/>
            </button>
        </header>
    );
};

export default StartPageHeader;