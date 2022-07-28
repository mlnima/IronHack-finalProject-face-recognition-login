import {FC} from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Style = styled.div`
  grid-area: header;
  height: 100px;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  margin: 5px;
  .header-content{
    margin: auto;
    max-width: 1300px;
  }
`
interface HeaderPropTypes {

}

const Header: FC<HeaderPropTypes> = (props) => {
    return (
        <Style>
            <div className='header-content'>
                <Logo/>
            </div>
        </Style>
    )
};
export default Header
