import React from 'react';
import styles from "./Profile.module.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
    return (
        <React.Fragment>
            <h1>Marilyn Monroe</h1>
            <div className={styles.address}>
                <FaMapMarkerAlt />
                <h3>Poznan, PL</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut dignissimos dolore, ex facilis fuga ipsam iste itaque labore molestias, nesciunt non odio, rem reprehenderit rerum soluta sunt suscipit!</p>
            <blockquote className={styles.quote}>
                <p>When a naked man's chasing a woman through an alley <br />
                    with a butcher knife and a hard-on, <br />
                    I figure he's not out collecting for the Red Cross.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consectetur, deserunt eligendi eos hic id ipsa minus necessitatibus nulla officiis quae quaerat quasi, ratione tenetur totam vel velit voluptate!</p>
        </React.Fragment>
    );
};

export default Profile;