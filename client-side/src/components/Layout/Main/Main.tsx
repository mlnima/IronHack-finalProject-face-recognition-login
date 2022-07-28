import React, {FC} from "react";
import styled from "styled-components";
// import Sidebar from "../Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const Style = styled.div`
  grid-area: main;
  height: 100%;
  min-width: 100vw;
  min-height: 70vh;
  //display: grid;
  //grid-template-columns: 1fr;
  //grid-template-areas: 'main-content'
  //                     'sidebar';
  //grid-gap: 5px;
  //
  //@media only screen and (min-width: 768px) {
  //  grid-template-columns: 320px 1fr;
  //  grid-template-areas:  'sidebar main-content';
  //}
`
interface MainPropTypes {

}

const Main: FC<MainPropTypes> = (props) => {
    return (
        <Style>
            {/*<Sidebar/>*/}
            <div>
                <Outlet/>
            </div>
        </Style>
    )
};
export default Main