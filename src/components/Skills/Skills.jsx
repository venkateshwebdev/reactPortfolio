import './Skills.css'

import Python from './SkillsEssentials/python.png';
import JavaScript from './SkillsEssentials/js.png'
import React from './SkillsEssentials/logo192.png'
import HTML from './SkillsEssentials/html.png'
import CSS from './SkillsEssentials/css-3.png'
import EXPRESS from './SkillsEssentials/expressjs.svg'
import mongoDB from './SkillsEssentials/mongoDB.png'
import { useContext } from 'react';
import ThemeContext from '../../themeContext';
import HeadingUnder from '../HeadingDesign/HeadingUnder';

const imageArray = [{src:Python,name:"Python"},{src:JavaScript,name:"JavaScript"},{src:React,name:"React"},{src:HTML,name:"HTML"},{src:CSS,name:"CSS"},{src:EXPRESS,name:"Express.Js"},{ src:mongoDB,name:"mongoDB"}]

const Skills = (props) => {
    const cxt = useContext(ThemeContext)
    const createSkill =(img)=>{
        return(
            <div className="skill-main">
                <img src={img.src} alt="" />
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