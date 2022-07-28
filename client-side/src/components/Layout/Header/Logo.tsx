import styled from "styled-components";
import {Link} from "react-router-dom";

const Style = styled.div`
  grid-area: header;
  height: 100px;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
`

const Logo = () => {
    return (
        <Style>
            <Link to={'/'}>
                <img src="/logo.png" alt="logo"/>
            </Link>
        </Style>
    )
};
export default Logo
