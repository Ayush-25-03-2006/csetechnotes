import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import set from "SETS.pdf";
import relation from "RELATION.pdf";
import func from "FUNCTION.pdf";
import logic from "Propositional Logic.pdf";
import graph from "Graph Theory in Discrete Mathematics.pdf";
import question from "DISCRETE MATHEMATICS TOP 30 QUES-ANS.pdf";

function Discrete() {
    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});

    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);

    return (
        <div className="container mt-4">
        <u><h3>Topic Wise Notes Content</h3></u>
        <hr />
        <h3 className="mb-4">1. Sets</h3>
        <a href={set}
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
            <div
                className="mt-3">
                    <iframe src={set} 
                        width="70%"
                        height="200px"
                        onLoad={() => toast.success("Notes Loaded Successully",{autoClose:1000,transition:null})}
                    ></iframe>
                </div>
        )}
        <hr />
        <h3 className="mb-4">2. Relation</h3>
        <a
          href={relation}
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
              src={relation}
              width="70%"
              height="200px"
              onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">3. Function</h3>
        <a
          href={func}
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
              src={func}
              width="70%"
              height="200px"
              onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">4. Propositional Logic</h3>
        <a
          href={logic}
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
              src={logic}
              width="70%"
              height="200px"
              onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">5. Graph Theory</h3>
        <a
          href={graph}
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
              src={graph}
              width="70%"
              height="200px"
              onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
            ></iframe>
          </div>
        )}
        <hr />
        <h1 style={{color: "crimson"}}>@ Important Question</h1>
        <hr />
        <h3 className="mb-4">6. Homogeneous Equation</h3>
        <a
          href={question}
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
              src={question}
              width="70%"
              height="200px"
              onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
            ></iframe>
          </div>
        )}
        <ToastContainer/>
    </div>
    )
}
export default Discrete;