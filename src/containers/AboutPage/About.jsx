import Button from '../../components/Button/Button';
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import './About.css'
const About = () => {
    const right = '< ';
    const left = ' />';
    return ( 
        <div className="about-container" id='about'>
            <HeadingUnder name="About" />
            <div className='about-wrap'>
            <div className='name'>Keerthi Venkatesh Sirigineedi</div>
            <div className='content'>I am a <span>Student</span> graduating in Electronics and Communiaction Engineering.</div>
            <div className='content'>I am very much intrested in {right}<span>WEB DEVELOPMENT</span>{left}<span> && SOFTWARE TECHOLOGIES</span>.</div>
            <div>Lorem ipsum dolor sit amet <span>consectetur, adipisicing</span> elit. Voluptas ducimus cumque nulla qui inventore, iusto.</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Praesentium eligendi</span> quo, recusandae atque iure exceptu.</div>
            <Button name=" About my Skills →"/>
            </div>
        </div>
     );
}
 
export default About;