import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import styled from "styled-components";
import { closeAlert } from "../../store/reducers/globalSlice";

interface AlertPropTypes {

}

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--popup-text-color, #fff);
  background-color: var(--popup-outer-background-color, rgba(0, 0, 0, .6));
  z-index: 1010;

  .alert-message {
    min-width: 300px;
    max-width: 600px;
    background-color: var(--popup-background-color, #191919);
    padding: 0;
    border-radius: 5px;

    .alert-message-header {
      background-color: var(--popup-header-color, #202020);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px 5px 0 0;
      padding: 5px 0;

      .close-alert {
        color: var(--navigation-text-color, #ccc);;
        background-color: transparent;
        border: none;
        //margin: 0;
        //padding: 0 10px;
        height: 25px;
        width: 40px;
        display: flex;
        justify-content: center;

        .faTimes {
          width: 25px;
          height: 25px;
          margin: 0 2px;
          background-color: var(--post-element-info-text-color, #ccc);
          mask: url('/asset/images/icons/times-solid.svg') no-repeat center;
          -webkit-mask: url('/asset/images/icons/times-solid.svg') no-repeat center;
        }
      }

      .alert-type {
        padding: 0 10px;
        margin: 0;
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;

        .icon {
          width: 25px;
          height: 25px;
        }

        .faCheckCircle {
          width: 25px;
          height: 25px;
          margin: 0 2px;
          background-color: green;
          mask: url('/asset/images/icons/circle-check-solid.svg') no-repeat center;
          -webkit-mask: url('/asset/images/icons/circle-check-solid.svg') no-repeat center;
        }

        .faExclamationCircle {
          width: 25px;
          height: 25px;
          margin: 0 2px;
          background-color: blue;
          mask: url('/asset/images/icons/circle-exclamation-solid.svg') no-repeat center;
          -webkit-mask: url('/asset/images/icons/circle-exclamation-solid.svg') no-repeat center;
        }

        .faExclamationTriangle {
          width: 25px;
          height: 25px;
          margin: 0 2px;
          background-color: red;
          mask: url('/asset/images/icons/triangle-exclamation-solid.svg') no-repeat center;
          -webkit-mask: url('/asset/images/icons/triangle-exclamation-solid.svg') no-repeat center;
        }
      }
    }

    .alert {
      text-align: center;
      padding: 10px;
    }
  }
`

const Alert: FC<AlertPropTypes> = (props) => {
    const alert = useAppSelector((store)=>store.global.alert)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (alert.active) {
            const component = true
            setTimeout(() => {
                if (component) {
                    dispatch(closeAlert(null))
                }
            }, 3000)
        }
    }, [alert]);


    if (alert?.active){
        return (
            <StyledDiv className='alert-box' onClick={() => dispatch(closeAlert(null))}>

                    <div className='alert-message'>
                        <div className='alert-message-header handle' >
                            <p className='alert-type'>
                                {alert.type === 'success' ?
                                    <span className={'icon faCheckCircle'}/> :
                                    alert.type === 'error' ?
                                        <span className={'icon faExclamationTriangle'}/> :
                                        <span className={'icon faExclamationCircle'}/>
                                }
                            </p>
                            <button className='close-alert' onClick={() => dispatch(closeAlert(null))}>
                                <span className={'icon faTimes'}/>

                            </button>
                        </div>
                        <p className='alert'>
                            {alert.message}
                        </p>
                        {/*//@ts-ignore*/}
                        {!!alert.err?.stack && <p>{alert.err?.stack}</p>}
                    </div>

            </StyledDiv>
        )
    }else return null

};
export default Alert
