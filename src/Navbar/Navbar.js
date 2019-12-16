import React from 'react';
import styles from './Navbar.module.css'
import MarilynMonroe from './MarilynMonroe.jpg';
import { MdPerson, MdPhoto } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <figure className={styles.marilynOutline}>
                    <img className={styles.marilyn} src={MarilynMonroe}
                     alt="Marilyn Monroe" />
                </figure>
                <div className={styles.icons}>
                    <NavLink
                        to="/profile"
                        activeClassName={styles.currentPage}
                    >
                        <MdPerson />
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        activeClassName={styles.currentPage}
                    >
                        <MdPhoto />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;