import React, {useState} from 'react';
import styles from './BuildHistoryPage.module.scss';
import Header from './Header/Header';
import Footer from '../../shared/Footer/Footer';
import Button from '../../shared/Button/Button';
import ModalWindow from '../../shared/ModalWindow/ModalWindow';
import {getBuilds} from '../../../requests';
import CommitCard from '../../shared/CommitCard/CommitCard';


const BuildHistoryPage = () => {
    const [builds, setBuilds] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [commitHash, setCommitHash] = useState('');

    if (builds.length === 0) {
        getBuilds().then(setBuilds);
    }

    const commitCards = builds.map(build => {
        return (
            <CommitCard {...build} />
        );
    });

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
                {commitCards}
                <Button accent={false} className={styles.showMoreBtn}>Show more</Button>
            </main>
            <Footer/>
        </>
    );
};

export default BuildHistoryPage;