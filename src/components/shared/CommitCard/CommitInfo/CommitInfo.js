import React from 'react';
import styles from './CommitInfo.module.scss';
import Commit from '../../Commit/Commit';

const CommitInfo = ({branch, hash, className}) => {
    return (
        <div className={`${styles.commitInfoContainer} ${className}`}>
            <Commit fillColor="#000000" opacity="0.5" width="16" height="8"/>
            <p className={styles.commitBranch}>{branch}</p>
            <p className={styles.commitHash}>{hash}</p>
        </div>
    );
};

export default CommitInfo;