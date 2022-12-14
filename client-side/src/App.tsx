import React, {useEffect} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import MainRouter from "./components/Layout/Main/MainRouter";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {autoLogin} from "./store/reducers/userSlice";
import Alert from "./components/includes/Alert";

const App = () => {

    const dispatch = useAppDispatch()
    const isLogin = useAppSelector((store)=>store.users.isLogin)

    useEffect(() => {
        if (localStorage.token && !isLogin){
            dispatch(autoLogin(localStorage.token))
        }
    }, []);

    return (
        <div className="App left-sidebar-layout">
            <GlobalStyle/>
            <MainRouter/>
            <Alert/>
        </div>
    );
}

export default App;
