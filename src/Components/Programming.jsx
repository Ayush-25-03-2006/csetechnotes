import { Link } from "react-router-dom";
import "./Programming.css";

function Programming() {
    return (
        <div className="programming-container">

            <h1 className="programming-title">💻 Programming</h1>

            <div className="category-grid">

                <Link to="/C" className="card">
                    <i className="bi bi-c-square-fill"></i>
                    <p>C Programming</p>
                </Link>

                <Link to="/Java" className="card">
                    <i className="bi bi-cup-hot-fill"></i>
                    <p>Java Programming</p>
                </Link>

                <Link to="/Dsa" className="card">
                    <i className="bi bi-diagram-3-fill"></i>
                    <p>Data Structures</p>
                </Link>

                <Link to="/Daa" className="card">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p>DAA</p>
                </Link>

            </div>
        </div>
    );
}

export default Programming;