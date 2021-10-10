import React, {useState} from 'react';
import styles from './BuildHistoryPage.module.scss';
import Header from './Header/Header';
import Footer from '../../shared/Footer/Footer';
import Button from '../../shared/Button/Button';
import CommitCard from '../../shared/CommitCard/CommitCard';
import ModalWindow from '../../shared/ModalWindow/ModalWindow';


const BuildHistoryPage = () => {

    const [modalShow, setModalShow] = useState(false);
    const [commitHash, setCommitHash] = useState('')

    return (
        <>
            <ModalWindow show={modalShow}
                         handleClickOnCancel={() => setModalShow(!modalShow)}
                         cancelValue={modalShow}
                         handleClickOnFormFieldCrossMark={() => setCommitHash('')}
                         onInputChange={(event) => {
                             setCommitHash(event.target.value);
                         }}
                         commitHashValue={commitHash}
            />
            <Header repoName={'phillip1967/my-awesome-repo'}
                    value={modalShow}
                    handleClick={() => setModalShow(!modalShow)}
            />
            <main className={styles.content}>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="err"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="inProgress"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="err"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <CommitCard state="ok"
                            number="1365"
                            message="add documentation for postgres scaler"
                            branch="master"
                            hash="9c9f0b9"
                            author="Vadim Makeev"
                            date="21 янв, 03:06"
                            period="1 ч 20 мин"/>
                <Button accent={false} className={styles.showMoreBtn}>Show more</Button>
            </main>
            <Footer/>
        </>
    );
};

export default BuildHistoryPage;