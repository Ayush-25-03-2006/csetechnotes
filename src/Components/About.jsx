import "./About.css";
import about_page from "./Images/csenotes_about.jpeg";
function About() {
    return (
        <div className="contain">
            <img className="img_abt" src={about_page} alt="about page who have created" />
        </div>
    );
}

export default About;