import React from 'react';
import styles from './Navigation.module.css';
import NavItem from './NavigationAccessories/NavItem';
import logo from '../../Gallery/logo.png'

const Navigation = () => {
    return (
        <div className={styles.mainNavigation}>
                <div className={styles.logo}><img src={logo}/></div>
                <NavItem name="Dashboard"></NavItem>
                <NavItem name="Market"></NavItem>
                <NavItem name="Active Bids"></NavItem>
                <NavItem name="Favourites"></NavItem>
                <NavItem name="My Protfolio"></NavItem>
                <NavItem name="Wallet"></NavItem>
                <NavItem name="History"></NavItem>
                <NavItem name="Settings"></NavItem>
        </div>
    );
};

export default Navigation;