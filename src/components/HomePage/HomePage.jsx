import './HomePage.css';
import image from './HomePageEssentials/image.svg'
import Button from '../Button/Button';
import { Parallax } from 'react-parallax';
import { useCallback, useContext, useState } from 'react';
import ThemeContext from '../../themeContext';
const Home = (props) => {
    const cxt = useContext(ThemeContext);
    const handleScroll = (e)=>{
        cxt.setNavScroll(true);
        console.log(e.target)
    }
    return (
        <>
        <div onScroll={handleScroll} className={`home-container ${cxt.addDiv}`}>
            <div className="home-wrap" id='home'>
            <div className="home-content">
                <p className='greet'>━━ HELLO</p>
                <h1>I'm <span>Venkatesh</span> Sirigineedi</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nulla laboriosam culpa ut quas officiis!</p>
            </div>
            <a href="#about"><Button name="Know More →"/></a>
            </div>
            {/* <div className='img-wrap'></div> */}
            </div>
            </>
     );
}
 
export default Home;