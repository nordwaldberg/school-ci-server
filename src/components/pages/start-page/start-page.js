import React from 'react';
import styles from './start-page.module.scss';
import screwdriverAndWrench from '../../../icons/screwdriver_and_wrench.svg';

import { StartPageHeader } from '../../headers';
import { Footer } from '../../footer';

const StartPage = () => {
    return (
        <>
            <StartPageHeader/>
            <main className={styles['content']}>
                <img src={screwdriverAndWrench} className={styles['content__icon']}/>
                <p className={styles['content__text']}>
                    Configure repository connection <br/>
                    and synchronisation settings
                </p>
                <button className={styles['content__btn']}>Open settings</button>
            </main>
            <Footer/>
        </>
    );
};

export default StartPage;