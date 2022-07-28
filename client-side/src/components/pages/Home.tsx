import React, {FC} from "react";
import styled from "styled-components";

const Style = styled.main`

`
interface MainComponentsWrapperPropTypes {

}

const Home: FC<MainComponentsWrapperPropTypes> = (props) => {
    return (
        <Style>
            Home
        </Style>
    )
};
export default Home