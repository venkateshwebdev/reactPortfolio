import "./projects.css"
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import fash from './projectThumb.png'
import todo from './projectThumb2.png'
import stream from './projectThumb3.png'
import sneaker from './projectThumb1.png'
import {Link} from "react-router-dom"
const Card = (props)=>{
    return(
        <div className={`projectcard  ${props.align}`}>
            <div className={`project-content`}>
                <div className="text-[92px] font-bold opacity-30">0{props.num}</div>
                <div className="text-[48px] font-bold">{props.title}</div>
                <div className="text-sm">{props.des}</div>
                <div>Tech Stack : {props.tech}</div>
            </div>
            <Link to={props.url}><div className="project-image" data-aos="slide-up"><img src={props.img}/></div></Link>
        </div>
    )
}
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return ( 
        <div className="projects-container" id="projects">
            <HeadingUnder name="Projects" />
            <div className="project-wrap">
            <Card num="1" title="StreamZ" des="Watch and save your favorite videos on this YouTube-like website." tech="ReactJS" img={stream} url={"https://streamzz.vercel.app"} />
            <Card num="2" title="SneakerSpot" des="Upgrade your sneaker game with our premier online store for stylish, high-quality sneakers from top brands like Puma, Nike, and Adidas." tech="ReactJS, ExpressJS ,mongoDB"  img={sneaker} url={"https://sneakerspots.vercel.app"} />
            <Card num="3" title="Fashion-ed" des="Style, Shop, Blog: Fashion Hub for Trendsetters and Enthusiasts." align="reverse" tech="NextJS,ReactJS" img={fash} url={"https://fashion-ed.vercel.app"} />
            <Card num="4" title="ToDo" des="Organize your Tasks 'WHENEVER,WHEREVER' ." tech="ReactJS"  img={todo} url={"https://todo-venkateshwebdev.vercel.app"} />
            </div>
        </div>
     );
}
 
export default Projects;