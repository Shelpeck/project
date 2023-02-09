import React, {useState} from 'react';
import './styles/App.css';
import Navbar from "./components/ui/Navbar";
import Atalar from "./components/Atalar"
import Login from "./components/Login"
import Register from "./components/Register"
import {AuthContext} from "./context";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"

function App() {
    const [isAuth, setIsAuth] = useState(-1);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Atalar />}/>
                    <Route path="register" element={<Register />}/>
                    <Route path="*" element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;