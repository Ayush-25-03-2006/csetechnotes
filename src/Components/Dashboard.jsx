import dbms from "./Images/dbms.jpeg";
import os from "./Images/os.jpeg";
import oops from "./Images/oops.jpeg";
import dsa from "./Images/dsa.jpeg";
import network from "./Images/cn.jpeg";
import java from "./Images/java.jpeg";
import daa from "./Images/daa.jpeg";
import c from "./Images/c.jpeg";
import de from "./Images/de.jpeg";
import { Link } from "react-router-dom";
function Dashboard() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 ms-2 me-2">
            <div className="col">
                <div className="card">
                    <img src={dbms} className="card-img-top" alt="DataBase" />
                    <div style={{backgroundColor: "#333333"}} className="card-body ">
                        <Link to="/Dbms" className="btn btn-primary mb-2 btn-lg">
                            DBMS
                        </Link>
                        <h3 style={{color: "white"}}>Database Management System</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={c} className="card-img-top" style={{height: "545px"}} alt="Computer Networks" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/" className="btn btn-primary mb-2 btn-lg">
                            C
                        </Link>
                        <h3 style={{color: "white"}}>C Programming</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={os} className="card-img-top" alt="Operating System"/>
                        <div style={{backgroundColor: "#333333"}} className="card-body">
                           <Link to="/Os" className="btn btn-primary mb-2 btn-lg">
                            OS
                            </Link>
                           <h3 style={{color: "white"}}>Operating System</h3>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={dsa} className="card-img-top" alt="Data Structure & Algorithm" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/Dsa" className="btn btn-primary mb-2 btn-lg">
                            DSA
                        </Link>
                        <h3 style={{color: "white"}}>Data Structure & Algorithm</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={network} className="card-img-top" alt="Computer Networks" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/Networking" className="btn btn-primary mb-2 btn-lg">
                            CN
                        </Link>
                        <h3 style={{color: "white"}}>Computer Networks</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={java} className="card-img-top" alt="Computer Networks" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/java" className="btn btn-primary mb-2 btn-lg">
                            JAVA
                        </Link>
                        <h3 style={{color: "white"}}>Java Programming</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={daa} className="card-img-top" alt="Computer Networks" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/Daa" className="btn btn-primary mb-2 btn-lg">
                            DAA
                        </Link>
                        <h3 style={{color: "white"}}>Design And Analysis Of Algorithm</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={oops} className="card-img-top" style={{height:"540px"}} alt="Object Oriented Programming" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/Oops" className="btn btn-primary mb-2 btn-lg">
                            OOPS
                        </Link>
                        <h3 style={{color: "white"}}>Object Oriented Programming System</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={de} className="card-img-top" alt="Object Oriented Programming" />
                    <div style={{backgroundColor: "#333333"}} className="card-body">
                        <Link to="/" className="btn btn-primary mb-2 btn-lg">
                            DE
                        </Link>
                        <h3 style={{color: "white"}}>Digital Electronics</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard