import React, {useState} from 'react';
import styles from './SettingsPage.module.scss';
import Header from './Header/Header';
import FormField from '../../shared/FormField/FormField';
import Footer from '../../shared/Footer/Footer';
import Button from '../../shared/Button/Button';
import {useHistory} from 'react-router-dom';


const SettingsPage = () => {

    const history = useHistory();
    const [repository, setRepository] = useState('');
    const [command, setCommand] = useState('');
    const [branch, setBranch] = useState('');
    const [minutes, setMinutes] = useState(10);
    const [btnsDisabled, setBtnsDisabled] = useState(false);

    const save = () => {
        setBtnsDisabled(!btnsDisabled);
    }

    return (
        <>
            <Header/>
            <main className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.textHeader}>Settings</h2>
                    <p className={styles.textParagraph}>
                        Configure repository connection
                        and synchronisation settings
                    </p>
                </div>
                <form className={styles.settingsForm}>
                    <FormField required={true}
                               labelText="GitHub repository"
                               placeholderText="user-name/repo-name"
                               resetBtnColor="#CCCCCC"
                               resetBtnWidth="16"
                               resetBtnHeight="16"
                               onInputChange={(event) => {
                                   setRepository(event.target.value);
                               }}
                               handleClick={() => setRepository('')}
                               value={repository}
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
                               handleClick={() => setCommand('')}
                               value={command}
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
                               handleClick={() => setBranch('')}
                               value={branch}
                    />
                    <div className={styles.fieldWithText}>
                        <p className={styles.fieldText}>Synchronize every</p>
                        <input type="number" placeholder="10"
                               className={styles.fieldInput}
                               onChange={(event) => {
                                   setMinutes(event.target.value);
                               }}
                               value={minutes}
                        />
                        <p className={styles.fieldText}>minutes</p>
                    </div>
                    <div className={styles.btnsContainer}>
                        <Button accent={true}
                                className={styles.btn}
                                value={btnsDisabled}
                                handleClick={() => {
                                    if (repository !== '' && command !== '') {
                                        save();
                                    }
                                }}
                                disabled={btnsDisabled}>
                            Save
                        </Button>
                        <Button accent={false}
                                className={styles.btn}
                                disabled={btnsDisabled}
                                handleClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export default SettingsPage;