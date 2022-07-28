import {FC} from "react";
import styled from "styled-components";

const Style = styled.div`
  grid-area: footer;
  height: 200px;
  background-color: var(--footer-background-color);
  color: var(--footer-text-color);
`
interface FooterPropTypes {

}

const Footer: FC<FooterPropTypes> = (props) => {
    return (
        <Style>
            Footer
        </Style>
    )
};
export default Footer