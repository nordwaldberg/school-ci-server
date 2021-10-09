import React from 'react';
import styles from './CommitCard.module.scss';
import CommitState from './CommitState/CommitState';
import CommitInfo from './CommitInfo/CommitInfo';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import DateInfo from './DateInfo/DateInfo';
import TimerInfo from './TimerInfo/TimerInfo';


const CommitCard = ({state, number, message, branch, hash, author, date, period}) => {
    return (
        <div className={styles.card}>
            <div className={styles.msgContainer}>
                <CommitState state={state}
                             number={number}/>
                <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.commitInfoContainer}>
                <CommitInfo branch={branch} hash={hash} className={styles.commitInfo}/>
                <AuthorInfo author={author} className={styles.commitAuthor}/>
            </div>
            <div className={styles.dateContainer}>
                <DateInfo date={date} className={styles.date}/>
                <TimerInfo period={period} className={styles.timer}/>
            </div>
        </div>
    );
};

export default CommitCard;