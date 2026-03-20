import { useState } from "react";
import questionmatrix from "./Matrix/MATHS_MATRIX&LINEARALGEBRA.pdf";
import matrixnotes from "./Matrix/MATHS_notes_MATRIX&LINEARALGEBRA.pdf";
import calculus1 from "./Matrix/MATHSnotesCALCULUS-I.pdf";
import integration from "./Matrix/INTEGRATIONBETAGAMMAPYQ.pdf";
import betagamma1ques from "./Matrix/BETAGAMMAQUESANS.pdf";
import betagamma2ques from "./Matrix/BETAGAMMA7.8QUESANS.pdf"; 
function Matrix() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);
    const [showPdf7, setShowPdf7] = useState(false);
    return(
        <div className="container mt-4">
                  <u><h3 >Topic Wise Notes Content</h3></u>
                  <hr />
                  <h1># Matrix</h1>
                  <hr />
                    <h3 className="mb-4">1. Matrix Notes</h3>
                    <a
                      href={matrixnotes}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={matrixnotes}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Matrix Question & Answer</h3>
                    <a
                      href={questionmatrix}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={questionmatrix}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1># Calculus-I</h1>
                    <hr />
                    <h3 className="mb-4">3. Calculus-I Notes</h3>
                    <a
                      href={calculus1}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={calculus1}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">4. Integration Beta Gamma Question & Answer</h3>
                    <a
                      href={integration}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={integration}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">5. Beta Gamma Question & Answer</h3>
                    <a
                      href={betagamma1ques}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={betagamma1ques}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">6. Beta Gamma 7.8 Question & Answer</h3>
                    <a
                      href={betagamma2ques}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={betagamma2ques}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1># Calculus-II</h1>
                    <h3 className="mb-4">6. Beta Gamma 7.8 Question & Answer</h3>
                    <a
                      href={betagamma2ques}
                      download
                      className="btn btn-primary btn-lg mb-4"
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
                          src={betagamma2ques}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                </div>
    )
}
export default Matrix;