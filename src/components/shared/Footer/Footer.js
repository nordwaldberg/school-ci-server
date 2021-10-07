import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link']}>
                    <a href='' className={styles['footer__anchor']}>Support</a>
                </li>
                <li className={styles['footer__link']}>
                    <a href='' className={styles['footer__anchor']}>Learning</a>
                </li>
                <li className={styles['footer__link']}>
                    <a href='' className={styles['footer__anchor']}>Русская версия</a>
                </li>
            </ul>
            <p className={styles['footer__copyright-text']}>&copy; 2020 Alina Lomakina</p>
        </footer>
    );
};

export default Footer;