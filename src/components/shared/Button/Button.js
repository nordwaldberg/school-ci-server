import React from 'react';
import styles from './Button.module.scss';


const Button = ({children, accent, className, disabled, handleClick}) => {
    return (
        <button
            className={`${styles.btn} ${accent ? styles['btn--accent'] : styles['btn--standard']} ${className}`}
            disabled={disabled}
            onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;