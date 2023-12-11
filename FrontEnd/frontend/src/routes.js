import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewSpot from './pages/NewSpot';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = { <Login /> } />
                <Route path="/dashboard" element = { <Dashboard /> } />
                <Route path="/newspot" element = { <NewSpot /> } /> 
            </Routes>
        </BrowserRouter>
    );
}

