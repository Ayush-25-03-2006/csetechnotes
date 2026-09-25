import { Link } from "react-router-dom";
// import imagenotes from "./Images/digital notes.webp";
import chakravyu from "./Images/chakravyu.jpeg";
import "./Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
    useEffect(() => {
        document.title = "Learn Computer Science"
    })

    const [showAI, setShowAI] = useState(false);
    return (
        <>
            <div className="dashboard-container">

                <div className="hero-section">
                    {/* <a target="_blank" href="https://chakravyuai.vercel.app/"><img src={chakravyu} alt="notes" className="hero-image" /></a> */}
                    {/* <a href="https://chakravyuai.vercel.app/" target="_blank" className="chakravyu-btn">Chakravyu AI Mode</a> */}
                    <button
                        className="chakravyu-btn"
                        onClick={() => setShowAI(!showAI)}
                    > 
                        {showAI ? "Hide Chakravyu AI Mode" : "Chakravyu AI Mode"}
                    </button>
                    {(showAI &&
                    <iframe
                        src="https://chakravyuai.vercel.app/"
                        width="100%"
                        height="500px"
                        style={{ border: "none", borderRadius: "15px" }}
                    />
                    )}
                    <h1 className="title" style={{color:"black", backgroundColor:"white", borderRadius:"25px"}}>Explore Top Categories</h1>
                </div>

                <div className="category-grid">

                    <Link to="/Mathematics" className="card">
                        <i className="bi bi-calculator"></i>
                        <p>Mathematics</p>
                    </Link>

                    <Link to="/Programming" className="card programming-card">
                        <i className="bi bi-code-slash"></i>
                        <p>Programming</p>
                    </Link>


                    <Link to="/Networking" className="card">
                        <i className="bi bi-hdd-network"></i>
                        <p>Computer Networks</p>
                    </Link>

                    <Link to="/Os" className="card">
                        <i className="bi bi-cpu"></i>
                        <p>Operating System</p>
                    </Link>

                    <Link to="/De" className="card">
                        <i className="bi bi-cpu-fill"></i>
                        <p>Digital Electronics</p>
                    </Link>

                    <Link to="/Dbms" className="card">
                        <i className="bi bi-database"></i>
                        <p>DBMS</p>
                    </Link>

                    <Link to="/Toc" className="card">
                        <i className="bi bi-diagram-3"></i>
                        <p>Theory Of Computation</p>
                    </Link>

                    <Link to="/Ai" className="card">
                        <i className="bi bi-robot"></i>
                        <p>Artificial Intelligence</p>
                    </Link>

                    <Link to="/Se" className="card">
                        <i className="bi bi-laptop"></i>
                        <p>Software Engineering</p>
                    </Link>

                    <Link to="/cd" className="card">
                        <i className="bi bi-terminal"></i>
                        <p>Compiler Design</p>
                    </Link>

                    <Link to="/wit" className="card">
                        <i className="bi bi-globe"></i>
                        <p>Web & Internet Technology</p>
                    </Link>

                    <Link to="/ml" className="card">
                        <i className="bi bi-bar-chart-line"></i>
                        <p>Machine Learning</p>
                    </Link>
                </div>
            </div>
            <hr className="hr" />
            <div className="cont">
                <Link to="https://www.akubihar.com/btech-cs-question-papers.html" className="quiz-card">
                    <i className="bi bi-patch-question"></i>
                    <p style={{color:"black"}}>BEU Question</p>
                </Link>

                <Link to="/quiz" className="quiz-card">
                    <i className="bi bi-journal-check"></i>
                    <p style={{color:"black"}}>Quiz</p>
                </Link>

                <Link to="/about" className="quiz-card">
                    <i className="bi bi-person-circle"></i>
                    <p style={{color:"black"}}>About</p>
                </Link>
            </div>
        </>
    );
}

export default Dashboard;