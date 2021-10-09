import React from 'react';
import styles from './AuthorInfo.module.scss';
import User from '../../User/User';


const AuthorInfo = ({author, className}) => {
    return (
        <div className={`${styles.authorContainer} ${className}`}>
            <User fillColor="#000000"
                  opacity="0.5"
                  width="12"
                  height="14"/>
            <p className={styles.author}>{author}</p>
        </div>
    );
};

export default AuthorInfo;