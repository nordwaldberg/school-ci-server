import React from 'react';
import styles from './FormField.module.scss';
import CrossMark from '../CrossMark/CrossMark';

const FormField = ({ required, labelText, placeholderText, resetBtnColor, resetBtnWidth, resetBtnHeight, onInputChange }) => {
    if (required) {
        return (
            <div className={styles['form__field']}>
                <label className={styles['form__field__label']}>
                    {labelText} <span className={styles['required-field__icon']}>*</span>
                </label>
                <input type="text" placeholder={placeholderText}
                       className={styles['form__field__input']} required
                        onChange={onInputChange}
                />
                <button className={styles['form__field__reset-btn']}>
                    <CrossMark fillColor={resetBtnColor} width={resetBtnWidth} height={resetBtnHeight}/>
                </button>
            </div>
        );
    } else {
        return (
            <div className={styles['form__field']}>
                <label className={styles['form__field__label']}>
                    {labelText}
                </label>
                <input type="text" placeholder={placeholderText}
                       className={styles['form__field__input']}
                       onChange={onInputChange}
                />
                <button className={styles['form__field__reset-btn']}>
                    <CrossMark fillColor={resetBtnColor} width={resetBtnWidth} height={resetBtnHeight}/>
                </button>
            </div>
        );
    }
};

export default FormField;