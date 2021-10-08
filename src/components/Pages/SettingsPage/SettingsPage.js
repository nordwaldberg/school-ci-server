import React, {useState} from 'react';
import styles from './SettingsPage.module.scss';
import Header from './Header/Header';
import FormField from '../../shared/FormField/FormField';
import Footer from '../../shared/Footer/Footer';
import Button from '../../shared/Button/Button';


const SettingsPage = () => {

    const [repository, setRepository] = useState('');
    const [command, setCommand] = useState('');
    const [branch, setBranch] = useState('');
    const [buttonState, setButtonState] = useState(false);

    const save = () => {
        setButtonState(!buttonState);
    }

    return (
        <>
            <Header/>
            <main className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.textHeader}>Settings</h2>
                    <p className={styles.textParagraph}>
                        Configure repository connection <br/>
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
                               className={styles.fieldInput}/>
                        <p className={styles.fieldText}>minutes</p>
                    </div>
                    <Button accent={true}
                            compClass={styles.btn}
                            value={buttonState}
                            handleClick={() => {
                                if (repository !== '' && command !== '') {
                                    save();
                                }
                            }}
                            disabled={buttonState}>
                        Save
                    </Button>
                    <Button accent={false}
                            disabled={buttonState}>
                        Cancel
                    </Button>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export default SettingsPage;