function Mathematics() {
    return (
        <div className="category-grid">

            <Link to="/Matrix" className="card">
                <i className="bi bi-calculator"></i>
                <p>Matrix</p>
            </Link>
            <Link to="/Dc" className="card">
                <i className="bi bi-c-square"></i>
                <p>Differential Calculus</p>
            </Link>
            <Link to="/Ps" className="card">
                <i className="bi bi-cup-hot"></i>
                <p>Probability & Statistics</p>
            </Link>
            <Link to="/Discrete" className="card">
                <i className="bi bi-diagram-3"></i>
                <p>Discrete Mathematics</p>
            </Link>
        </div>
    )
}
export default Mathematics;