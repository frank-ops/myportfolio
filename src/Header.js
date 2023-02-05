import React,{useState} from 'react';
const Header = () => {
        let [image,setImage]=useState(require("./assets/menu.png"))
        let [t,setT]=useState("none");
        const handler = () =>{ 
            image===require("./assets/menu.png")?setImage(require("./assets/cross.png")):setImage(require("./assets/menu.png"));
            t==="none"?setT("flex"):setT("none");
        }
    
        
return(
    <div className='header'>
        <h4 className='hide'><a href="#home">Home</a></h4>
        <h4  className='hide'><a href="#about">About me</a></h4>
        <h4 className='hide'><a href="#contact">Contact me</a></h4>
        <img className="menu" src={image} onClick={handler}/>
        <div className='sheader_body'>
            <div className='smallheader' style={{display:t}}>
            <h4 className='head-1'><a href="#">Home</a></h4>
            <h4 className='head-2'><a href="#">About me</a></h4>
            <h4 className='head-3'><a href="#">Contact me</a></h4>
            </div>
        </div>
    </div>
)
}
export default Header;