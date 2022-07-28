import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Style = styled.main`
  grid-area: main-content;
`

const Layout = () => {
    return (
        <Style>
            <Header/>
            <Navigation/>
            <Main/>
            <Footer/>
        </Style>
    )
};

export default Layout