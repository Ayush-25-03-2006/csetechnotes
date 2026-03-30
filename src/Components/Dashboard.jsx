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

                <Link to="/Mathematics" className="card">
                    <i className="bi bi-calculator"></i>
                    <p>Mathematics</p>
                </Link>

                <Link to="/Programming" className="card programming-card">
                    <i className="bi bi-code-slash"></i>
                    <p>Programming</p>
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