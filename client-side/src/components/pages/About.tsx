import React, {FC} from "react";
import styled from "styled-components";

const Style = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    margin: auto;
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
      margin: 5px;
      width: 320px;
      height: 240px;
      object-fit: contain;
      border: 1px solid #f90;
    }
  }
`

interface MainComponentsWrapperPropTypes {

}

const About: FC<MainComponentsWrapperPropTypes> = (props) => {
    return (
        <Style>
            <section>
                <h1>Goal:</h1>
                Simple Login to the website by matching the user image with the profile image and log the user in.
                <img
                    src="https://www.sodapdf.com/blog/wp-content/uploads/2020/01/Facial-recognition-thumbnail-1024x537.jpg"/>
            </section>
            <section>
                <h1>Technologies:</h1>
                I used Typescript NodeJs ExpressJ React Sass Jsonwebtoken
            </section>

            <div className={'images'}>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"/>
                <img src="https://i.ytimg.com/vi/r1Iygf-rRdE/maxresdefault.jpg"/>
                <img src="https://www.surrealcms.com/uploads/nodejs-logo.png"/>
                <img src="https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png"/>
                <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"/>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"/>
                <img src="https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869"/>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ayy1yu2wPVJw4YPlVjoxG61pwnlXNamFBw&usqp=CAU"/>
                <img src="https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png"/>
                <img
                    src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg"/>
            </div>
        </Style>
    )
};
export default About