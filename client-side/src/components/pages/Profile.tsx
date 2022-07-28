import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {fetchUserProfileImageUpload} from "../../store/reducers/userSlice";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .use-profile-image {
    width: 200px;
  }

`
const Profile = () => {
    const imageElement = useRef<HTMLImageElement>(null);
    const uploadInputElement = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const {isLogin, userData} = useAppSelector((store) => store.users)
    const navigate = useNavigate();

    // useLayoutEffect(() => {
    //     if (!isLogin) {
    //         sendBackUser()
    //
    //     }
    // }, [isLogin]);
    //
    // const sendBackUser=()=>{
    //     setTimeout(()=>{
    //         if (!isLogin) {
    //             navigate(-1)
    //         }
    //     }, 2000)
    // }


    const onUploadHandler = (e: any) => {
        const filesData = new FormData()
        filesData.append('token', localStorage.token)
        filesData.append('profileImage', e.target.files[0], 'profile')
        filesData.append('type', 'profile')
        dispatch(fetchUserProfileImageUpload(filesData))
        if (imageElement?.current){
            imageElement?.current.setAttribute(
                'src',
                (userData?.profileImage || '/user-default.png') + '?date=' + Date.now()
            )
        }
    }

    return (
        <Style className="profile">
            {/*//@ts-ignore*/}
            <img ref={imageElement} onClick={(e) => uploadInputElement?.current?.click(e)}
                 src={userData?.profileImage ? '/api' +userData?.profileImage : '/user-default.png'} alt={'profile image'}
                 className={'use-profile-image'}/>
            <input ref={uploadInputElement} type="file" style={{display: 'none'}} onChange={e => onUploadHandler(e)}/>
            {!!userData.email && <p>Email: <span>{userData.email}</span></p>}
            {!!userData.username && <p>Username: <span>{userData.username}</span></p>}
        </Style>
    );
}

export default Profile;
