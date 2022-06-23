import React from 'react';
import styles from './MiddleSection.module.css';
import TopNavigation from './TopNavigation/TopNavigation';

const MiddleSection = () => {
    return (
        <div className={styles.middleSection}>
            {/* Top Navigation */}
            <TopNavigation></TopNavigation>

            {/* carousell */}
            this is carousell

            {/* Trending nfts */}
            This is trending nfts
            There will be some cards
            this is another card
            this is another try

        </div>
    );
};

export default MiddleSection;