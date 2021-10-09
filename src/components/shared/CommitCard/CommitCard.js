import React from 'react';
import styles from './CommitCard.module.scss';

const CommitCard = ({state, number, message, branch, hash, author, date, period}) => {
    return (
        <div className={styles.card}>
            <div className={styles.msgContainer}></div>
            <div className={styles.commitInfoContainer}></div>
            <div className={styles.dateContainer}></div>
        </div>
    );
};

export default CommitCard;