import { Link } from "react-router-dom";
import "./Programming.css";
import { useEffect } from "react";

function Programming_Quiz() {
    useEffect(() => {
        document.title = "Programming"
    })
    return (
        <div className="programming-container">

            <h1 className="programming-title">💻 Programming</h1>

            <div className="category-grid">

                <Link to="/cquiz" className="card">
                    <i className="bi bi-c-square-fill"></i>
                    <p>C Programming</p>
                </Link>

                <Link to="/javaquiz" className="card">
                    <i className="bi bi-cup-hot-fill"></i>
                    <p>Java Programming</p>
                </Link>

                <Link to="/oopsquiz" className="card">
                    <i className="bi bi-boxes"></i>
                    <p>OOPs</p>
                </Link>

                <Link to="/dsaquiz" className="card">
                    <i className="bi bi-diagram-3-fill"></i>
                    <p>Data Structures</p>
                </Link>

                <Link to="/daaquiz" className="card">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p>DAA</p>
                </Link>

            </div>
        </div>
    );
}

export default Programming_Quiz;