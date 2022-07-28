import React, {FC} from "react";
import styled from "styled-components";

const Style = styled.main`

`
interface MainComponentsWrapperPropTypes {

}

const About: FC<MainComponentsWrapperPropTypes> = (props) => {
    return (
        <Style>
            About
        </Style>
    )
};
export default About