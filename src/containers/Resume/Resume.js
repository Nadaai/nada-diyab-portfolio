import { resumeSection } from "../../portfolio";
import "./Resume.scss";

const Resume = () => {
    if (!resumeSection.display) {
        return null;
    }

    return (
        <div className="resume-section" id="resume">
            <h1 className="resume-title">{resumeSection.title}</h1>
            <p className="resume-subtitle">{resumeSection.subtitle}</p>

            <a
                href={require("./resume.pdf")}
                download="Nada-Diyab-Resume.pdf"
                className="resume-button"
            >
                Download My Resume
            </a>
        </div>
    );
};

export default Resume;