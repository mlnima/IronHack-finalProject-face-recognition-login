import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {register} from "../../store/reducers/userSlice";
import {useNavigate} from "react-router-dom";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  form {
    max-width: 320px;
  }

`

const Register = () => {
    const dispatch = useAppDispatch()
    const isLogin = useAppSelector((store)=>store.users.isLogin)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(register(formData))
    }

    useEffect(() => {
        if (isLogin){
            navigate(-1)
        }
    }, [isLogin]);

    return (
        <Style>
            <h1>Register</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name={'username'} onChange={onChangeHandler} value={formData.username}
                       placeholder={'username'}
                       className={'form-control-input'}/>
                <input type="text" name={'email'} onChange={onChangeHandler} value={formData.email}
                       placeholder={'email'}
                       className={'form-control-input'}/>
                <input type="password" name={'password'} onChange={onChangeHandler} value={formData.password}
                       placeholder={'password'}
                       className={'form-control-input'}/>
                <input type="password" name={'password2'} onChange={onChangeHandler} value={formData.password2}
                       placeholder={'repeat password'}
                       className={'form-control-input'}/>
                <button type={'submit'} className={'btn btn-primary'}>Register</button>
            </form>
        </Style>
    )
};
export default Register