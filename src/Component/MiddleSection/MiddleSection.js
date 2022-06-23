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


        </div>
    );
};

export default MiddleSection;