import ermodel from "./Dbms/ERModel.pdf";
import relationalmodel from "./Dbms/RelationalModel.pdf";
import functionaldependency from "./Dbms/FunctionalDependency.pdf";
import normalization from "./Dbms/Normalization.pdf";
import question1 from "./Dbms/DBMS TOP 30 QUES-ANS.pdf"
import index from "./Dbms/Indexing.pdf"

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function Dbms() {

    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);

    useEffect(() => {
      document.title = "Database Management System"
    })

    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});
    return(

        <div className="container mt-4">
          <h2 style={{color:"black", fontFamily:"sans-serif", fontSize:"40px"}}>Database Management System</h2>
          <hr />
          <u><h3 >Topic Wise Notes Content</h3></u>
          <hr />
            <h3 className="mb-4">1. ER Model</h3>
            <a
              href={ermodel}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf1(!showPdf1)}
            >
              {showPdf1 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf1 && (
              <div className="mt-3">
                <iframe
                  src={ermodel}
                  width="70%"
                  height="300px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">2. Relational Model</h3>
            <a
              href={relationalmodel}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf2(!showPdf2)}
            >
              {showPdf2 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf2 && (
              <div className="mt-3">
                <iframe
                  src={relationalmodel}
                  width="70%"
                  height="300px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">3. Functional Dependency</h3>
            <a
              href={functionaldependency}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf3(!showPdf3)}
            >
              {showPdf3 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf3 && (
              <div className="mt-3">
                <iframe
                  src={functionaldependency}
                  width="70%"
                  height="300px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">4. Normalization</h3>
            <a
              href={normalization}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf4(!showPdf4)}
            >
              {showPdf4 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf4 && (
              <div className="mt-3">
                <iframe
                  src={normalization}
                  width="70%"
                  height="300px"
                  title="DBMS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <hr />
            <h3 className="mb-4">5. Indexing</h3>
            <a
              href={index}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf6(!showPdf6)}
            >
              {showPdf6 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf6 && (
              <div className="mt-3">
                <iframe
                  src={index}
                  width="70%"
                  height="300px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <h1 style={{color:"crimson"}}>@ Important Questions</h1>
            <hr />
            <h3 className="mb-4">1. Dbms Top 30 Questions</h3>
            <a
              href={question1}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf5(!showPdf5)}
            >
              {showPdf5 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf5 && (
              <div className="mt-3">
                <iframe
                  src={question1}
                  width="70%"
                  height="300px"
                  title="DBMS Notes"
                  style={{marginBottom:"20px"}}
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <ToastContainer position="top-center" theme="dark"/>
        </div>
    )
}
export default Dbms