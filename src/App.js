import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Navbar from "./Navbar/Navbar";
import Main from './Main/Main';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Navbar />
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
