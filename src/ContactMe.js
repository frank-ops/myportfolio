import React from 'react'
const ContactMe = () =>{
return(
    <div className='footer' id="contact">
        <div className='media'>
            <a href="https://linkedin.com/in/franklin1212" ><img src={require("./assets/linkedin.png")} alt="img"/></a>
            <a href="https://github.com/frank-ops" ><img src={require("./assets/github.png")} alt="img"/></a>
            <a href="mailto:thejasfranklin@gmail.com" target="__blank"><img src={require("./assets/gmail.png")} alt="img"/></a>
            <a href="https://www.facebook.com/thejasfranklin.gurrapu.71"><img src={require("./assets/facebook.png")} alt="img"/></a>
            <a href="https://twitter.com/Frankli66568599"><img src={require("./assets/twitter.png")} alt="img"/></a>
            <a href="https://www.instagram.com/franklin_jz_franklin/"><img src={require("./assets/instagram.png")} alt="img"/></a>
        </div>
        <div>
            <p>made with ❤ by Franklin</p>
        </div>
        <p>copyright © 2023 @frank-ops</p>
    </div>
)
}
export default ContactMe;