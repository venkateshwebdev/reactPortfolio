import { useCallback, useContext, useState } from 'react';
import About from '../AboutPage/About';
import Home from '../../components/HomePage/HomePage';
import './Navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import ThemeContext from '../../themeContext';
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import { NavLink } from "react-router-dom"

const NavElements = ()=>{
    return(
        <>
                <div className='navbar-el'> <a href="#home"> Home</a></div>
                <div className='navbar-el'> <a href="#about"> About</a></div>
                {/* <div className='navbar-el'> <a href=""></a> Resume</div> */}
                <div className='navbar-el'> <a href="#skills"> Skills</a></div>
                <div className='navbar-el'> <a href="#projects"> Projects</a></div>
                <div className='navbar-el'> <a href="#contact">Contact</a></div>
        </>
    )
}


const Navbar = (props) => {
    const [toggle,setToggle] = useState(false)
    const [modeIcon,setModeIcon] = useState(true)
    const cxt = useContext(ThemeContext);
    const changeColor = ()=>{
        setModeIcon(prev=>!prev)
        if (modeIcon === true){
            cxt.setAddDiv('dark')
        }
        else{
            cxt.setAddDiv('light')
        }
    }
    const  handleMenuToggle = ()=>{
        setToggle(false);
    }
    const  handleCloseToggle = ()=>{
        setToggle(true);
    }

    return ( 
        <div className={`navbar-container ${cxt.navScroll&&"shadow"}`}  >
            <HeadingUnder name="Portfolio" />
            <div className="navbar-elements">
                <NavElements />
            </div>
            <div onClick={changeColor} className="wesite-color-change">{modeIcon?"🌚":"☀️"}</div>
            <div className='navbar-toggle-menu'>
                {toggle?<RiCloseLine color='dark' onClick={handleMenuToggle} />:<RiMenu3Line color ="dark" onClick={handleCloseToggle} />}
                {toggle&&<div className={`navbar-toggle-menu-container ${cxt.addDiv}`}><NavElements /></div>}
            </div>
        </div>
     );
}
 
export default Navbar;