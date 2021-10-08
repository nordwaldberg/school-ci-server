import React from 'react';
import styles from './Button.module.scss';


const Button = ({children, accent, className, disabled, handleClick}) => {
    return (
        <button className={`${accent ? styles.accentBtn : styles.standardBtn}
        ${className}`}
                disabled={disabled}
                onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;