import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.pageFooter}>
            <ul className={styles.linkList}>
                <li className={styles.listLink}>
                    <a href='' className={styles.anchor}>Support</a>
                </li>
                <li className={styles.listLink}>
                    <a href='' className={styles.anchor}>Learning</a>
                </li>
                <li className={styles.listLink}>
                    <a href='' className={styles.anchor}>Русская версия</a>
                </li>
            </ul>
            <p className={styles.textCopyright}>&copy; 2020 Alina Lomakina</p>
        </footer>
    );
};

export default Footer;