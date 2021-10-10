import React from 'react';
import styles from './StartPage.module.scss';
import screwdriverAndWrench from '../../../icons/screwdriver_and_wrench.svg';
import Header from './Header/Header';
import Footer from '../../shared/Footer/Footer';
import ButtonLink from '../../shared/ButtonLink/ButtonLink';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import {defaultSettings} from '../../../store/defaults/settings';


const StartPage = () => {
    const history = useHistory();

    if (!_.isEqual(useSelector((state) => state.settings), defaultSettings)) {
        history.push('/build-history');
    }

    return (
        <>
            <Header/>
            <main className={styles.content}>
                <img src={screwdriverAndWrench} className={styles.backgroundImage}/>
                <p className={styles.textA}>
                    Configure repository connection <br/>
                    and synchronisation settings
                </p>
                <ButtonLink accent={true} className={styles.btn} to="/settings">
                    Open settings
                </ButtonLink>
            </main>
            <Footer/>
        </>
    );
};

export default StartPage;