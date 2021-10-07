import React, {useState} from 'react';
import styles from './SettingsPage.module.scss';
import Header from './Header/Header';
import FormField from '../../shared/FormField/FormField';
import Footer from '../../shared/Footer/Footer';



const SettingsPage = () => {

    const [repository, setRepository] = useState('');
    const [command, setCommand] = useState('');
    const [branch, setBranch] = useState('');

    return (
        <>
            <Header/>
            <main className={styles['content']}>
                <div className={styles['content__text']}>
                    <h2 className={styles['content__text__header']}>Settings</h2>
                    <p className={styles['content__text__paragraph']}>
                        Configure repository connection <br/>
                        and synchronisation settings
                    </p>
                </div>
                <form className={styles['settings-form']}>
                    <FormField required={true}
                        labelText="GitHub repository"
                        placeholderText="user-name/repo-name"
                        resetBtnColor="#CCCCCC"
                        resetBtnWidth="16"
                        resetBtnHeight="16"
                        onInputChange={(event) => {
                            setRepository(event.target.value);
                        }}
                    />
                    <FormField required={true}
                               labelText="Build command"
                               placeholderText="npm ci && npm run build"
                               resetBtnColor="#CCCCCC"
                               resetBtnWidth="16"
                               resetBtnHeight="16"
                               onInputChange={(event) => {
                                   setCommand(event.target.value);
                               }}
                    />
                    <FormField required={false}
                               labelText="Main branch"
                               placeholderText="master"
                               resetBtnColor="#CCCCCC"
                               resetBtnWidth="16"
                               resetBtnHeight="16"
                               onInputChange={(event) => {
                                   setBranch(event.target.value);
                               }}
                    />
                    <div className={styles['form__field_row']}>
                        <p className={styles['form__field_row__text']}>Synchronize every</p>
                        <input type="number" placeholder="10"
                        className={styles['form__field_row__input']}/>
                        <p className={styles['form__field_row__text']}>minutes</p>
                    </div>
                    <button className={styles['form__btn_accent']}>Save</button>
                    <button className={styles['form__btn']}>Cancel</button>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export default SettingsPage;