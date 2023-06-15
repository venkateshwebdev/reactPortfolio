import Button from '../../components/Button/Button';
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import './About.css'
const About = () => {
    const right = '< ';
    const left = ' />';
    return ( 
        <div className="about-container" id='about'>
            <HeadingUnder name="` About ` " />
            <div className='about-wrap'>
            <div className='name'>Keerthi Venkatesh Sirigineedi</div>
            <div className='content'>I am a <span>Student</span> graduated in Electronics and Communiaction Engineering.</div>
            <div className='content'>I am very much intrested in {right}<span>WEB DEVELOPMENT</span>{left}<span> && SOFTWARE TECHOLOGIES</span>.</div>
            <div className='aboutC'>Welcome to my portfolio website! I am a passionate and dedicated web developer with a strong foundation in full-stack development. As a recent fresher, I possess a solid understanding of front-end frameworks like React and Next.js, as well as back-end technologies such as Node.js and Express.js. Additionally, I am proficient in working with databases like MongoDB and Firebase, along with languages like JavaScript and Python.</div>
            <a href="#skills"><Button name=" About my Skills →"/></a>
            </div>
        </div>
     );
}
 
export default About;