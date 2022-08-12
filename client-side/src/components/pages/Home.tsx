import React, {FC} from "react";
import styled from "styled-components";

const Style = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 90px;
  }
`

interface MainComponentsWrapperPropTypes {

}

const Home: FC<MainComponentsWrapperPropTypes> = (props) => {
    return (
        <Style>
            <h1> Facial Recognition Login</h1>

        </Style>
    )
};
export default Home