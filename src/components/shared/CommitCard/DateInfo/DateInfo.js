import React from 'react';
import styles from './DateInfo.module.scss';
import Calendar from '../../Calendar/Calendar';


const DateInfo = ({ date, className }) => {
    return (
        <div className={`${styles.dateContainer} ${className}`}>
            <Calendar fillColor="#000000"
                       opacity="0.5"
                       width="14"
                       height="16"/>
            <p className={styles.date}>{date}</p>
        </div>
    );
};

export default DateInfo;