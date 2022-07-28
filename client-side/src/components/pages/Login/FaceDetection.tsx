import React, {FC, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import {useAppDispatch} from "../../../store/hooks";
import {loginByFace} from "../../../store/reducers/userSlice";
import {dataURItoBlob} from "../../../_util/_util";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  video,img {
    width: 320px;
    aspect-ratio: 16/9;
    border: 1px solid white;
    display: block;
    object-fit: contain;
    transform: rotateY(180deg);
    z-index: 1002;
    resize: both;
  }
`

interface FaceDetectionPropTypes {
    formData: {
        username: string,
        password?: string,
    }
}

const FaceDetection: FC<FaceDetectionPropTypes> = ({formData}) => {
    const webcamRef = useRef<React.LegacyRef<Webcam> | undefined>(null);
    const [userImage, setUserImage] = useState<any>(null)
    const [renderWebcam, setRenderWebcam] = useState<any>(false)

    const capture = React.useCallback(
        () => {
            //@ts-ignore
            setUserImage(webcamRef?.current?.getScreenshot())
            // const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (userVideo && userVideo?.current) {
    //         userVideo.current.src = window.URL.createObjectURL(userVideo)
    //     }
    // }, [userVideo, userVideo?.current]);

    useEffect(() => {
        if (renderWebcam && webcamRef?.current) {
            setTimeout(()=>{
                //@ts-ignore
                //setUserImage(webcamRef.current?.getScreenshot())
                capture()
            },3000)
        }
    }, [renderWebcam]);


    useEffect(() => {
        if (userImage && formData?.username) {
            const file = dataURItoBlob(userImage)
            const filesData = new FormData()

            filesData.append('unknown',file,'unknown.jpg');
            filesData.append('username', formData.username)

            // dispatch(loginByFace({
            //     image: userImage ,
            //     username: formData.username
            // }))
            dispatch(loginByFace(filesData))
            setRenderWebcam(false)
        }
    }, [userImage]);

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
        <Style>
            <button className={'btn btn-info'} onClick={() => setRenderWebcam(!renderWebcam)}>
                Face Detection
            </button>
            {renderWebcam &&
            <Webcam audio={false}
                    height={180}
                    screenshotFormat="image/jpeg"
                    width={320}
                    videoConstraints={videoConstraints}
                    //@ts-ignore
                    ref={webcamRef}
            />
            }
            {!!userImage &&
            <img className="card-img-top" src={userImage} alt="Card image cap"/>}
        </Style>
    )

};
export default FaceDetection
