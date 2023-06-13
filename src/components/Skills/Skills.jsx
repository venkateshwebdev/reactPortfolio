import './Skills.css'

import Python from './SkillsEssentials/python.png';
import JavaScript from './SkillsEssentials/js.png'
import React from './SkillsEssentials/logo192.png'
import HTML from './SkillsEssentials/html.png'
import CSS from './SkillsEssentials/css-3.png'
import EXPRESS from './SkillsEssentials/expressjs.svg'
import mongoDB from './SkillsEssentials/mongoDB.png'
import next from "./SkillsEssentials/next-js.svg"
import nodejs from "./SkillsEssentials/nodejs.png"
import firebase from "./SkillsEssentials/firebase.png"
import { SiFirebase } from 'react-icons/si';
import { useContext } from 'react';
import ThemeContext from '../../themeContext';
import HeadingUnder from '../HeadingDesign/HeadingUnder';
import { SiExpress } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
const imageArray = [{src:React,name:"ReactJS"},{ src:next,name:"NextJS"},{src:JavaScript,name:"JavaScript"},{src:nodejs,name:"Node.Js"},{src:EXPRESS,name:"Express.Js"},{src:Python,name:"Python"},{src:HTML,name:"HTML"},{src:CSS,name:"CSS"},{ src:mongoDB,name:"mongoDB"},{src:firebase,name:"Firebase"}]

const Skills = (props) => {
    const cxt = useContext(ThemeContext)
    const createSkill =(img)=>{
        return(
            <div className="skill-main">
                {img.src!=<SiNextdotjs/>?<img src={img.src} alt="" />:<SiNextdotjs />}
                {/* <SiNextdotjs /> */}
                <p>{img.name}</p>
            </div>
        )
        
    }
    return (
        <div className={`skill-container ${cxt.addDiv}`} id="skills">
            <HeadingUnder name=" ` Skills ` " />
        
        <div className="skill-wrap">
        <div className="skill-image-container">
            {imageArray.map((e)=>(createSkill(e)))}
        </div>
        </div>
        </div>
     );
}
 
export default Skills;