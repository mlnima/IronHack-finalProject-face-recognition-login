import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {logout} from "../../../store/reducers/userSlice";

const Style = styled.div`
  grid-area: navigation;
  height: 60px;
  background-color: var(--navigation-background-color);
  color: var(--navigation-text-color);

  #main-navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--navigation-text-color);
      margin-left: 10px;
    }
  }
`

const Navigation = () => {
    const isLogin = useAppSelector((store) => store.users.isLogin)
    const dispatch = useAppDispatch()

    const onLogoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Style>
            <nav id={'main-navigation'}>

                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                {isLogin &&
                    <>
                        <NavLink to="/profile">Profile</NavLink>
                        <a onClick={onLogoutHandler}>Logout</a>
                    </>
                }
                {!isLogin &&
                    <>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </>
                }

            </nav>
        </Style>
    )
};
export default Navigation