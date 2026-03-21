import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./Navbar.css";

function Navbar() {

    useEffect(() => {
        document.body.style.backgroundColor = "#333333"
        document.body.style.color = "white"
    }, [])

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">

                {/* Scrollable Menu */}
                <div className="nav-scroll">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item"><Link className="nav-link" to="/"><i className="bi bi-laptop"></i></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/c">C</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Dsa">DSA</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Daa">DAA</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Dbms">DBMS</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/De">DE</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Os">OS</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Java">JAVA</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Networking">CN</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Oops">OOPS</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Matrix">Matrix</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Ps">Probability</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Dc">Differential Calculus</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Discrete">Discrete</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar