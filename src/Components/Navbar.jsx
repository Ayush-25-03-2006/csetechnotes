import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = "#121212"
            document.body.style.color = "white"
            localStorage.setItem("theme", "dark")
        } else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} mb-3`}>
            <div className="container-fluid">

                <Link className="navbar-brand me-5" to="/">
                    <i className="bi bi-laptop"></i>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active me-5" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/about">About</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle me-5" to="/" role="button" data-bs-toggle="dropdown">
                                Notes Provider
                            </Link>

                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/action">Name</Link></li>
                                <li><Link className="dropdown-item" to="/another">Designation</Link></li>
                                <li><Link className="dropdown-item" to="/something">Degree</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/something">Developer Name</Link></li>
                            </ul>
                        </li>

                    </ul>

                    <button className="btn btn-outline-primary me-5" onClick={toggleTheme}>
                        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar