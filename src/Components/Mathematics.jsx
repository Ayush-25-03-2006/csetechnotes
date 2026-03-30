import { Link } from "react-router-dom";
import "./Mathematics.css";

function Mathematics() {
    return (
        <div className="math-container">

            <h1 className="math-title">📘 Mathematics</h1>

            <div className="category-grid">

                <Link to="/Matrix" className="card">
                    <i className="bi bi-grid-3x3-gap"></i>
                    <p>Matrix</p>
                </Link>

                <Link to="/Dc" className="card">
                    <i className="bi bi-graph-up"></i>
                    <p>Differential Calculus</p>
                </Link>

                <Link to="/Ps" className="card">
                    <i className="bi bi-bar-chart"></i>
                    <p>Probability & Statistics</p>
                </Link>

                <Link to="/Discrete" className="card">
                    <i className="bi bi-diagram-2"></i>
                    <p>Discrete Mathematics</p>
                </Link>

            </div>
        </div>
    );
}

export default Mathematics;