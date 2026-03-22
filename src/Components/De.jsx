import bool from "./De/BooleanAlgebraLogicalGates&K-map.pdf";
import gate from "./De/ImplementallgatesusingNAND&NOR.pdf";
import combinational from "./De/CombinationalCircuit.pdf";
import sequential from "./De/SequentialCircuits.pdf";
import question from "./De/DCTOP25QUESANS.pdf";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function De() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});

    return(
        <div className="container mt-4">
                  <u><h3 >Topic Wise Notes Content</h3></u>
                  <hr />
                    <h3 className="mb-4">1. Boolean Algebra, Logical Gates & K-Map</h3>
                    <a
                      href={bool}
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
                          src={bool}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                          onLoad={() => toast.success("Notes Loaded Successfully...")}
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Implementation Of All Gates Using NAND & NOR</h3>
                    <a
                      href={gate}
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
                          src={gate}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                          onLoad={() => toast.success("Notes Loaded Successfully...")}
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">3. Combinational Circuit</h3>
                    <a
                      href={combinational}
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
                          src={combinational}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                          onLoad={() => toast.success("Notes Loaded Successfully...")}
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">4. Sequential Circuit</h3>
                    <a
                      href={sequential}
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
                          src={sequential}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                          onLoad={() => toast.success("Notes Loaded Successfully...")}
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1 style={{color:"crimson"}}>@ Important Question</h1>
                    <h3 className="mb-4">1. Top 25 Question & Answer Of Digital Electronics</h3>
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
                      onClick={() => setShowPdf5(!showPdf5)}
                    >
                      {showPdf5 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf5 && (
                      <div className="mt-3">
                        <iframe
                          src={question}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                          onLoad={() => toast.success("Notes Loaded Successfully...")}
                        ></iframe>
                      </div>
                    )}
                    <ToastContainer position="top-center" theme="dark"/>
                </div>
    )
}
export default De;