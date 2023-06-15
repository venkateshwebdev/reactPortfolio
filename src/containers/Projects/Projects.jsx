import "./projects.css"
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
const Card = (props)=>{
    return(
        <div className="projectcard">
        <div className="dynamic"></div>
        <iframe className="piframe" src={props.url} scrolling="no"  name='iframe' title='This is my video'></iframe>
        {/* <iframe src={props.url} height={"500px"} width={"300px"} scrolling="no" name='iframe' title='This is my video'></iframe> */}
        <div className="projectcardcontent">
        <h1>{props.title}</h1>
        <p>{props.des}</p>
        <h3>Tech Stach Used : -<span>{props.techStack}</span></h3>
        <div><a style={{color:"inherit"}} href={props.url}>Go to website 🔗</a></div>
        </div>

    </div>
    )
}
const Projects = () => {
    return ( 
        <div className="projects-container" id="projects">
            <HeadingUnder name="Projects" />
            <div className="project-wrap">
                <div className="projectcardcontainer">
                    <Card url="https://fashion-ed.vercel.app/" title={"Fashioned"} techStack={"Nextjs , React , Mongoose"} des={"A fun website where you can buy stuff, share ideas, and write stories."} />
                    <Card url="https://streamzz.vercel.app/" title={"StreamZ"} techStack={"React"} des={"Watch and save your favorite videos on this YouTube-like website."} />
                    <Card url="https://todo-venkateshwebdev.vercel.app/" title={"Todo"} techStack={"React"} des={"Organize your Tasks 'WHENEVER,WHEREVER' ."} />
                </div>
            </div>
        </div>
     );
}
 
export default Projects;