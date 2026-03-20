import { useState } from "react";
import questionmatrix from "./Matrix/MATHS_MATRIX&LINEARALGEBRA.pdf";
import matrixnotes from "./Matrix/MATHS_notes_MATRIX&LINEARALGEBRA.pdf";
function Matrix() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    return(
        <div className="container mt-4">
                  <u><h3 >Topic Wise Notes Content</h3></u>
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
                </div>
    )
}
export default Matrix;