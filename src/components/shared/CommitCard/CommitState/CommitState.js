import React from 'react';
import styles from './CommitState.module.scss';
import StateIcon from '../StateIcon/StateIcon';

const CommitState = ({state, number}) => {
    return (
        <div className={styles.commitStateContainer}>
            <StateIcon state={state} className={styles.icon}/>
            <p className={`${styles[`${state}`]} ${styles.commitNumber}`}>
                #{number}
            </p>
        </div>
    );
};

export default CommitState;