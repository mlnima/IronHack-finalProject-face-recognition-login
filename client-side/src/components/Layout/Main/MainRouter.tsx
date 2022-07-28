import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Layout from "../Layout";
import Register from "../../pages/Register";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile";

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="*" element={<p>There's nothing here: 404!</p>}/>
            </Route>
        </Routes>
    )
};
export default MainRouter

