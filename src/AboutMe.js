import React from 'react'
const AboutMe = ()=>{
    return(
    <div className="About" id="about">
       <div className='ab_head'><h1>About Me</h1></div>
       <div className='myedu'>
       <h3>My Education</h3>
       <h4>I completed my bachelor's in Computer Science and Engineering at Aditya Engineering College with a Grade Point Average of 8.42</h4>
       </div>
        <div className='experience'>
            <h3>My Work Experience</h3>
                <div className='content'>
                    <div className='roles'>
                            <h3>Full Stack Developer - Zemoso Technologies ( 2022-present )</h3>
                            <ul>
                                <li>Currently working as an intern in the Zemoso Technologies</li>
                                <li>As a Full stack developer i was assigned to do the front-end tasks related to React daily</li>
                            </ul>
                    </div>
                    <div className='roles'>
                                <h3>Team Lead - Project Space ( 2022(April) ) <a href="https://drive.google.com/file/d/1IWDH6CBhf9ytTFSTQJi7XjBYEBoMTsNy/view?usp=share_link">certificate</a></h3>
                                <ul>
                                    <li>Managed a team of 4 in Project Space Campaign.</li>
                                    <li>Developed a Movie Recommendation System using Machine Learning.</li>
                                </ul>
                    </div>
                </div>
        </div>
       <div className="skills">
       <h3>My skills and Proficiences</h3>
       <div className='languages'>
        <img className ="img1" src={require("./assets/java.jpg")}/>
        <img className ="img2"  src={require("./assets/cpp.png")}/>
        <img className ="img3"  src={require("./assets/js.png")}/>
        <img className ="img4" src={require("./assets/node.jfif")}/>
        <img className ="img2"  src={require("./assets/react.png")}/>
        <img className ="img3" src={require("./assets/python.png")}/>
        <img className ="img4"  src={require("./assets/html.png")}/>
        <img className ="img3"  src={require("./assets/css.png")}/>
        <img className ="img2"  src={require("./assets/django.png")}/>
        <img className ="img4" src={require("./assets/c.png")}/>
        <img className ="img2"  src={require("./assets/adobe.png")}/>
        <img className ="img3"  src={require("./assets/sql.png")}/>
       </div>
       </div>
            <div className='experience'>
            <h3>My Achievements</h3>
                    <div className='content'>
                    <div className='roles'>
                            <ul style={{padding:"0px",marginLeft:"15px",marginTop:"15px"}}>
                                    <li>Secured 1<sup>st</sup> place in SQL query Competition which organized by Oracle Academy ( <a href="https://drive.google.com/file/d/1_memcDDMZG7ui0Gl6Lw8_9k6yS28O8_j/view?usp=share_link">Certificate</a> )</li>
                                    <li>Achieved IBM 101 certificate for python ( <a href="https://drive.google.com/file/d/14tQ6HW9Z9a2mzGMNiaj420rMLSBxajNe/view?usp=share_link">Certificate</a> )</li>
                                    <li>Solved 400+ problems in leetcode  ( <a href="https://leetcode.com/franklin12/">Link</a> ).</li>
                                    <li>6 Star problem solving badge in HackerRank ( <a href="https://www.hackerrank.com/thejasfranklin">Link</a> )</li>
                                    <li>5 Star Python, Cpp and Java Badges in HackerRank ( <a href="https://www.hackerrank.com/thejasfranklin">Link</a> )</li>
                            </ul>
                    </div>
                    </div>
            </div>
            <div className='experience'>
            <h3>My projects</h3>
                <div className='content'>
                <div className='roles'>
                            <h3>Thunder-AI ( <a href="https://github.com/frank-ops/thunder">Github Link</a> ) ( <a href="https://thunder-ai.netlify.app/">website Link</a> )</h3>
                            <ul>
                                <li>Created a web application which generates image from text </li>
                                <li>Here the text to image generation was done by the machine learning model by open Ai </li>
                                <li>For the front end i have used the react js framework and for database i used the mongodb and for backend i have used express js</li>
                            </ul>
                    </div>
                    <div className='roles'>
                            <h3>Netflix clone ( <a href="https://github.com/frank-ops/django">Github Link</a> )</h3>
                            <ul>
                                <li>Cloned the netflix with the user authentication also.</li>
                                <li>For the functionality in the backend i used the django framework.</li>
                                <li>Used the postgresql as the database for storing the user data and movie data also.</li>
                            </ul>
                    </div>
                    <div className='roles'>
                                <h3>Movie Recommendation System ( <a href="https://github.com/frank-ops/project_space">Github Link</a> )</h3>
                                <ul>
                                    <li>Recommendation System that uses Collaborative Filtering and Cosine Similarity to suggest best movies.</li>
                                    <li>Based on IMDB Movie Data Set of 30 Mb size and 45,000 Data Points.</li>
                                    <li>Developed Flask Backend that manages both the recommendation system and user requests.</li>
                                </ul>
                    </div>
                    <div className='roles'>
                                <h3>NOVA the chatbot ( <a href="https://github.com/frank-ops/chatbot">Github Link</a> )</h3>
                                <ul>
                                    <li>Developed a chatbot using python text to speech and speech recognition modules.</li>
                                    <li>It can answer all the basic questions of the user using switch cases for the responses  </li>
                                    <li>it dynamically creates voice file for the response and deletes when the task is completed </li>
                                </ul>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default AboutMe;
