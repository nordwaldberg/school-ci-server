import React from 'react';
import styles from './FormField.module.scss';
import CrossMark from '../CrossMark/CrossMark';


const FormField = ({
                       required,
                       labelText,
                       placeholderText,
                       resetBtnColor,
                       resetBtnWidth,
                       resetBtnHeight,
                       onInputChange,
                       handleClick,
                       value,
                       className
                   }) => {
    return (
        <div className={styles.formField}>
            <label className={styles.label}>
                {labelText} {required ? <span className={styles.requiredIcon}>*</span> : null}
            </label>
            <input type="text" placeholder={placeholderText}
                   className={styles.input} required={required}
                   onChange={onInputChange} value={value}
            />
            <button type="button" className={`${styles.resetBtn} ${className}`} onClick={handleClick}>
                <CrossMark fillColor={resetBtnColor} width={resetBtnWidth} height={resetBtnHeight}/>
            </button>
        </div>
    );
};

export default FormField;