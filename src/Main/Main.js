import React from 'react';
import {  Route, Switch } from "react-router-dom";
import styles from './Main.module.css';
import Profile from "../Profile/Profile";
import Gallery from "../Gallery/Gallery";

const Main = () => {

    return (
        <main className={styles.main}>
            <Switch>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </main>
    )
};

export default Main;
