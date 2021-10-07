import React from 'react';
import styles from './StartPage.module.scss';
import screwdriverAndWrench from '../../../icons/screwdriver_and_wrench.svg';

import {Link} from 'react-router-dom';
import Header from './Header/Header';
import Footer from '../../shared/Footer/Footer';


const StartPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.content}>
                <img src={screwdriverAndWrench} className={styles.backgroundImage}/>
                <p className={styles.textA}>
                    Configure repository connection <br/>
                    and synchronisation settings
                </p>
                <button className={styles['content__btn']}>
                    <Link to="/settings">Open settings</Link>
                </button>
            </main>
            <Footer/>
        </>
    );
};

export default StartPage;