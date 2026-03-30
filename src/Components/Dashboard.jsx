import { Link } from "react-router-dom";
import imagenotes from "./Images/digital notes.webp";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-container">

            <div className="hero-section">
                <img src={imagenotes} alt="notes" className="hero-image" />
                <h1 className="title">Explore Top Categories</h1>
            </div>

            <div className="category-grid">

                <Link to="/Maths" className="card">
                    <i className="bi bi-calculator"></i>
                    <p>Mathematics</p>
                </Link>

                <Link to="/C" className="card">
                    <i className="bi bi-c-square"></i>
                    <p>C Programming</p>
                </Link>

                <Link to="/Java" className="card">
                    <i className="bi bi-cup-hot"></i>
                    <p>Java Programming</p>
                </Link>

                <Link to="/Dsa" className="card">
                    <i className="bi bi-diagram-3"></i>
                    <p>Data Structures</p>
                </Link>

                <Link to="/Daa" className="card">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p>DAA</p>
                </Link>

                <Link to="/Cn" className="card">
                    <i className="bi bi-hdd-network"></i>
                    <p>Computer Networks</p>
                </Link>

                <Link to="/Os" className="card">
                    <i className="bi bi-cpu"></i>
                    <p>Operating System</p>
                </Link>

                <Link to="/Oops" className="card">
                    <i className="bi bi-boxes"></i>
                    <p>OOPs</p>
                </Link>

                <Link to="/De" className="card">
                    <i className="bi bi-cpu-fill"></i>
                    <p>Digital Electronics</p>
                </Link>

                <Link to="/Dbms" className="card">
                    <i className="bi bi-database"></i>
                    <p>DBMS</p>
                </Link>

            </div>
        </div>
    );
}

export default Dashboard;