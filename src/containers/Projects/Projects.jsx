import "./projects.css"
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
const Projects = () => {
    return ( 
        <div className="projects-container" id="projects">    
            <HeadingUnder name="Projects" />
            <div className="project-wrap">
                <div className="project-item">
                    <div className="project-item1"></div>
                    <div className="project-item2"></div>
                </div>
                <div className="project-item">
                    <div className="project-item1"></div>
                    <div className="project-item2"></div>
                </div>
                <div className="project-item">
                    <div className="project-item1"></div>
                    <div className="project-item2"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;