import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Navigation from '../components/navigation/Navigation';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRouter = ({ darkMode, handleDarkModeSwitch }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/home"
                    element={
                        <Navbar
                            darkMode={darkMode}
                            handleDarkModeSwitch={handleDarkModeSwitch}
                        />
                    }>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
