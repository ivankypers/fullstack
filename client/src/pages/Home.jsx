import React from 'react';

import Menu from "../components/Menu/Menu.jsx";
import {Route, Routes} from "react-router-dom";

const Home = () => {
    return (
        <section>
            <div className="container">
                <Menu />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/blog/*" element={<Menu />} />
                    <Route path="/users/*" element={<Menu />} />
                </Routes>
            </div>
        </section>
    );
};

export default Home;