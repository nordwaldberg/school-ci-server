import React from 'react';
import styles from './BuildHistoryPage.module.scss';
import Header from './Header/Header';
import Footer from '../../shared/Footer/Footer';
import Button from '../../shared/Button/Button';
import CommitCard from '../../shared/CommitCard/CommitCard';

const BuildHistoryPage = () => {
    return (
        <>
            <Header repoName={'phillip1967/my-awesome-repo'}/>
            <main className={styles.content}>
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