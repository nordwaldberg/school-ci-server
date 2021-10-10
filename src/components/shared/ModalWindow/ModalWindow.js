import React from 'react';
import styles from './ModalWindow.module.scss';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';


const ModalWindow = ({
                         show,
                         cancelValue,
                         handleClickOnCancel,
                         handleClickOnFormFieldCrossMark,
                         onInputChange,
                         commitHashValue
                     }) => {

    return show ? <div className={styles.modalWindowContainer}>
        <div className={styles.modalWindow}>
            <h2 className={styles.modalHeader}>New build</h2>
            <p className={styles.modalText}>
                Enter the commit hash which you want to build.
            </p>
            <FormField placeholderText="Commit hash"
                       resetBtnColor="#CCCCCC"
                       resetBtnWidth="16"
                       resetBtnHeight="16"
                       onInputChange={onInputChange}
                       value={commitHashValue}
                       handleClick={handleClickOnFormFieldCrossMark}/>
            <div className={styles.btnsContainer}>
                <Button accent={true}
                        className={styles.modalBtn}>
                    Run build
                </Button>
                <Button accent={false}
                        className={styles.modalBtn}
                        value={cancelValue}
                        handleClick={handleClickOnCancel}
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div> : null;
};

export default ModalWindow;