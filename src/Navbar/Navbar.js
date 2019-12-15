import React from 'react';
import styles from './Navbar.module.css'
import MarilynMonroe from './MarilynMonroe.jpg';
import { MdPerson, MdPhoto } from 'react-icons/md';


const Navbar = () => {

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <figure className={styles.marilynOutline}>
                    <img className={styles.marilyn} src={MarilynMonroe}
                     alt="Marilyn Monroe" />
                </figure>
                <div className={styles.icons}>
                    <MdPerson />
                    <MdPhoto />
                </div>
            </nav>
        </div>
    )
};

export default Navbar;