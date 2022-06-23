import React from 'react';
import styles from './NavItem.module.css';

const NavItem = (props) => {
    const itemName = props.name;
    return (
        <div className={styles.navItem}>
            <li>{itemName}</li>
        </div>
    );
};

export default NavItem;