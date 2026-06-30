import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useEffect } from "react";

function Quiz() {
    useEffect(() => {
        document.title = "Quiz"
    });
    return (
        <>
        <h1
  style={{
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "40px",
  }}
>
  Quiz
</h1>
        <div className="dashboard-container">
            <div className="category-grid">

                <Link to="/mathematicsquiz" className="card">
                    <i className="bi bi-calculator"></i>
                    <p>Mathematics</p>
                </Link>

                <Link to="/programmingquiz" className="card programming-card">
                    <i className="bi bi-code-slash"></i>
                    <p>Programming</p>
                </Link>

                <Link to="/networkingquiz" className="card">
                    <i className="bi bi-hdd-network"></i>
                    <p>Computer Networks</p>
                </Link>

                <Link to="/osquiz" className="card">
                    <i className="bi bi-cpu"></i>
                    <p>Operating System</p>
                </Link>

                <Link to="/oopsquiz" className="card">
                    <i className="bi bi-boxes"></i>
                    <p>OOPs</p>
                </Link>

                <Link to="/dequiz" className="card">
                    <i className="bi bi-cpu-fill"></i>
                    <p>Digital Electronics</p>
                </Link>

                <Link to="/dbmsquiz" className="card">
                    <i className="bi bi-database"></i>
                    <p>DBMS</p>
                </Link>

                <Link to="/tocquiz" className="card">
                    <i className="bi bi-diagram-3"></i>
                    <p>Theory of Computation</p>
                </Link>

                <Link to="/aiquiz" className="card">
                    <i className="bi bi-robot"></i>
                    <p>Artificial Intelligence</p>
                </Link>

                <Link to="/sequiz" className="card">
                    <i className="bi bi-journal-code"></i>
                    <p>Software Engineering</p>
                </Link>

            </div>
        </div>
    </>
    );
}

export default Quiz;