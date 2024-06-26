import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/Registration';
import HomePage from './HomePage';

// import FirstComponent from './Components/FirstComponent';

const root = ReactDOM.createRoot(document.getElementById('rootMain'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<App/>}></Route>
        <Route path='/login'element={<LoginPage/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
    </Routes>
    
    </BrowserRouter>
    // <App/>
);
