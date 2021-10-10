import React from 'react';
import styles from './SettingsButton.module.scss';
import {useHistory} from 'react-router-dom';
import Cog from '../Cog/Cog';


const SettingsButton = ({adaptive = false}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/settings');
    }

    if (!adaptive) {
        return (
            <button className={`${styles.btn} ${styles['btn--non-adaptive']}`} onClick={handleClick}>
                <Cog width="12" height="12" className={styles.btnIcon}/>
            </button>
        )
    }

    return (
        <button className={`${styles.btn} ${styles['btn--adaptive']}`} onClick={handleClick}>
            <Cog width="12" height="12" className={styles.btnIcon}/>
            <p className={styles.btnText}>Settings</p>
        </button>
    )
}

export default SettingsButton;
