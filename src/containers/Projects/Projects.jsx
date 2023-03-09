import "./projects.css"
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
const Projects = () => {
    return ( 
        <div className="projects-container" id="projects">    
            <HeadingUnder name="Projects" />
            <div className="project-wrap">
                <a className="project-a" href="https://venkatesh-project.vercel.app/">Click Here to Check Projects 🔗 </a>
            </div>
        </div>
     );
}
 
export default Projects;