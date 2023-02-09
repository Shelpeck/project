import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context/index";
import Atalar from "./Atalar";
import Login from "./Login"

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)

    return (
        <Routes>
            <Route path="/" element={<Tree/>}>
                <Route path="login" element={<Login/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;