import React from 'react';
import styles from './TimerInfo.module.scss';
import Stopwatch from '../../Stopwatch/Stopwatch';

const TimerInfo = ({period, className}) => {
    return (
        <div className={`${styles.timerContainer} ${className}`}>
            <Stopwatch  fillColor="#000000"
                        opacity="0.5"
                        width="13"
                        height="16"/>
            <p className={styles.timer}>{period}</p>
        </div>
    );
};

export default TimerInfo;