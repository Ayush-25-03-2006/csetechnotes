import { useState } from "react";

import questionmatrix from "./Matrix/MATHS_MATRIX&LINEARALGEBRA.pdf";
import matrixnotes from "./Matrix/MATHS_notes_MATRIX&LINEARALGEBRA.pdf";
import calculus1 from "./Matrix/MATHSnotesCALCULUS-I.pdf";
import integration from "./Matrix/INTEGRATIONBETAGAMMAPYQ.pdf";
import betagamma1ques from "./Matrix/BETAGAMMAQUESANS.pdf";
import betagamma2ques from "./Matrix/BETAGAMMA7.8QUESANS.pdf"; 
import calculus2 from "./Matrix/MATHSnotesCALCULUSll.pdf";
import taylor from "./Matrix/TAYLOR'SMACLUARIN'SROLLSTHEOREMpyq.pdf";
import maxmin from "./Matrix/MAXIMAMINIMA&LAGRANGEMULTIPLIER.pdf";
import limit from "./Matrix/LIMIT.pdf";
import indeterminant from "./Matrix/INDETERMINATEFORML'HospitalMAXIMAMINIMA.pdf";
import integration2 from "./Matrix/INTEGRATIONQUESANS.pdf";
import continuity from "./Matrix/CONTINUITY&DIFFERENTIABILITY.pdf";
import limitcontinuity from "./Matrix/LIMITCONTINUITY&DIFFERENTIABILITY.pdf";
import partial from "./Matrix/PARTIALDERIVATIVES.pdf";
import taylor1 from "./Matrix/TAYLORMACLAURINQUESANS.pdf";
import multivariable from "./Matrix/MULTIPLEVARIABLECALCULUSpyq.pdf";
import vector1 from "./Matrix/VECTORCALCULUSPART1️.pdf";
import vector2 from "./Matrix/VECTORCALCULUSPART2lineintegral.pdf";
import vectorquestion from "./Matrix/VECTORCALCULUSpyq.pdf";
import question1 from "./Matrix/MATHSIMPORTANTQUESTIONSSOLUTION.pdf";
import question2 from "./Matrix/MATHSTOP30QUESTIONS2023-24.pdf";

function Matrix() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);
    const [showPdf7, setShowPdf7] = useState(false);
    const [showPdf8, setShowPdf8] = useState(false);
    const [showPdf9, setShowPdf9] = useState(false);
    const [showPdf10, setShowPdf10] = useState(false);
    const [showPdf11, setShowPdf11] = useState(false);
    const [showPdf12, setShowPdf12] = useState(false);
    const [showPdf13, setShowPdf13] = useState(false);
    const [showPdf14, setShowPdf14] = useState(false);
    const [showPdf15, setShowPdf15] = useState(false);
    const [showPdf16, setShowPdf16] = useState(false);
    const [showPdf17, setShowPdf17] = useState(false);
    const [showPdf18, setShowPdf18] = useState(false);
    const [showPdf19, setShowPdf19] = useState(false);
    const [showPdf20, setShowPdf20] = useState(false);
    const [showPdf21, setShowPdf21] = useState(false);
    const [showPdf22, setShowPdf22] = useState(false);
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
                    <hr />
                    <h3 className="mb-4">1. Integration Question & Answer</h3>
                    <a
                      href={integration2}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf12(!showPdf12)}
                    >
                      {showPdf12 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf12 && (
                      <div className="mt-3">
                        <iframe
                          src={integration2}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <h3 className="mb-4">2. Calculus-I Notes</h3>
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
                    <h3 className="mb-4">3. Integration Beta Gamma Question & Answer</h3>
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
                    <h3 className="mb-4">4. Beta Gamma Question & Answer</h3>
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
                    <h3 className="mb-4">5. Beta Gamma 7.8 Question & Answer</h3>
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
                    <hr />
                    <h3 className="mb-4">1. Calculus-II Notes</h3>
                    <a
                      href={calculus2}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf7(!showPdf7)}
                    >
                      {showPdf7 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf7 && (
                      <div className="mt-3">
                        <iframe
                          src={calculus2}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Taylor Maclaurine Question & Answer</h3>
                    <a
                      href={taylor1}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf22(!showPdf22)}
                    >
                      {showPdf22 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf22 && (
                      <div className="mt-3">
                        <iframe
                          src={taylor1}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">3. Taylor's, Maclaurine's & Roll's Theorem Question & Answer</h3>
                    <a
                      href={taylor}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf8(!showPdf8)}
                    >
                      {showPdf8 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf8 && (
                      <div className="mt-3">
                        <iframe
                          src={taylor}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">4. Maxima, Minima & Lagrange Multiplier</h3>
                    <a
                      href={maxmin}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf9(!showPdf9)}
                    >
                      {showPdf9 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf9 && (
                      <div className="mt-3">
                        <iframe
                          src={maxmin}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">5. Limit </h3>
                    <a
                      href={limit}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf10(!showPdf10)}
                    >
                      {showPdf10 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf10 && (
                      <div className="mt-3">
                        <iframe
                          src={limit}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">6. Continuity & Differentiability </h3>
                    <a
                      href={continuity}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf13(!showPdf13)}
                    >
                      {showPdf13 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf13 && (
                      <div className="mt-3">
                        <iframe
                          src={continuity}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">7. Indeterminant Form, L'Hospital, Maxima Minima</h3>
                    <a
                      href={indeterminant}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf11(!showPdf11)}
                    >
                      {showPdf11 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf11 && (
                      <div className="mt-3">
                        <iframe
                          src={indeterminant}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1># Multivariable Calculus</h1>
                    <hr />
                    <h3 className="mb-4">1. Limit, Continuity & Differentiability</h3>
                    <a
                      href={limitcontinuity}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf14(!showPdf14)}
                    >
                      {showPdf14 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf14 && (
                      <div className="mt-3">
                        <iframe
                          src={limitcontinuity}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Partial Derivative</h3>
                    <a
                      href={partial}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf15(!showPdf15)}
                    >
                      {showPdf15 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf15 && (
                      <div className="mt-3">
                        <iframe
                          src={partial}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">3. Multivariable Calculus</h3>
                    <a
                      href={multivariable}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf16(!showPdf16)}
                    >
                      {showPdf16 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf16 && (
                      <div className="mt-3">
                        <iframe
                          src={multivariable}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1># Vector</h1>
                    <hr />
                    <h3 className="mb-4">1. Vector Calculus Part-I</h3>
                    <a
                      href={vector1}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf17(!showPdf17)}
                    >
                      {showPdf17 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf17 && (
                      <div className="mt-3">
                        <iframe
                          src={vector1}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Vector Calculus Part-II</h3>
                    <a
                      href={vector2}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf18(!showPdf18)}
                    >
                      {showPdf18 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf18 && (
                      <div className="mt-3">
                        <iframe
                          src={vector2}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">3. Vector Calculus Question & Answer</h3>
                    <a
                      href={vectorquestion}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf19(!showPdf19)}
                    >
                      {showPdf19 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf19 && (
                      <div className="mt-3">
                        <iframe
                          src={vectorquestion}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h1 style={{color:"crimson"}}>@ Important Question</h1>
                    <hr />
                    <h3 className="mb-4">1. Math Important Question</h3>
                    <a
                      href={question1}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf20(!showPdf20)}
                    >
                      {showPdf20 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf20 && (
                      <div className="mt-3">
                        <iframe
                          src={question1}
                          width="70%"
                          height="200px"
                          title="OOPS Notes"
                        ></iframe>
                      </div>
                    )}
                    <hr />
                    <h3 className="mb-4">2. Math Top 30 Question & Answer</h3>
                    <a
                      href={question2}
                      download
                      className="btn btn-primary btn-lg mb-4"
                    >
                      Download PDF
                    </a>
                    <button
                      className="btn btn-success btn-lg mb-4 ms-3"
                      onClick={() => setShowPdf21(!showPdf21)}
                    >
                      {showPdf21 ? "Hide Notes" : "Show Notes"}
                    </button>
                    {showPdf21 && (
                      <div className="mt-3">
                        <iframe
                          src={question2}
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