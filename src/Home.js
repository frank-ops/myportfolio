import React from 'react';
const Home = () =>{
    return(
     <div id="home">
        <div className='imgcontain'><img className='profilepic' src={require("./assets/mypic.jpg")} alt="img"/></div>
        <div className='content'>
            <h1>Hi i'm franklin</h1>
            <h3>A self made resourceful competetive programmer ,full stack developer  and java programmer .enjoys problem solving and building reliable user experiences for tech companies</h3>
        </div>
     </div>
    )
}
export default Home;