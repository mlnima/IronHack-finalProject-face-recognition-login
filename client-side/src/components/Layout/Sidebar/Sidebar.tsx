import {FC} from "react";
import styled from "styled-components";

const Style = styled.div`
  grid-area: sidebar;
  background-color: var(--sidebar-background-color);
  color: var(--sidebar-text-color);
`

interface SidebarPropTypes {

}

const Sidebar: FC<SidebarPropTypes> = (props) => {
    return (
        <Style>
            Sidebar
        </Style>
    )
};
export default Sidebar
