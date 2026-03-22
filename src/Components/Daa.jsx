import algo from "./Daa/ALGORITHMS&asymptoticnotation.pdf";
import sort from "./Daa/Sorting&Searching.pdf";
import graph from "./Daa/GraphAlgorithms.pdf";
import greedy from "./Daa/GreedyAlgorithms.pdf";
import dynamic from "./Daa/DynamicProgramming.pdf";
import question from "./Daa/DAATOP30QUES-ANS.pdf";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function Daa() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);

    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});
    return(
        <div className="container mt-4">
              <u><h3 >Topic Wise Notes Content</h3></u>
            <hr/>
              <h3 className="mb-4">1. Algorithm & Asymptotic Notation</h3>
            
              <a
                href={algo}
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
                    src={algo}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">2. Searching & Sorting</h3>
        
              <a
                href={sort}
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
                    src={sort}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">3. Graph Algorithm</h3>
        
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
                onClick={() => setShowPdf3(!showPdf3)}
              >
                {showPdf3 ? "Hide Notes" : "Show Notes"}
              </button>
        
              {showPdf3 && (
                <div className="mt-3">
                  <iframe
                    src={graph}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">4. Greedy Algorithm </h3>
        
              <a
                href={greedy}
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
                    src={greedy}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">5. Dynamic Algorithm </h3>
        
              <a
                href={dynamic}
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
                    src={dynamic}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <hr/>
              <h1 style={{color: "crimson"}}>@ Important Question</h1>
              <hr />
              <h3 className="mb-4">1. Top 30 Question & Answer Of DAA </h3>
        
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
                    title="OOPS Notes"
                  ></iframe>
                </div>
              )}
              <ToastContainer position="top-center"/>
            </div>
    )
}
export default Daa;