import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import limit from "./DifferentialCalculus/LIMIT.pdf";
import continuity from "./DifferentialCalculus/CONTINUITY&DIFFERENTIABILITY.pdf";
import successive from "./DifferentialCalculus/SUCCESSIVE DIFFERENTIATION part 1️⃣.pdf";
import leibnitz from "./DifferentialCalculus/LEIBNITZ'S THEOREM.pdf";
import differential from "./DifferentialCalculus/DIFFERENTIAL EQUATION (VARIABLE SEPARABLE).pdf";
import homogeneous from "./DifferentialCalculus/HOMONEGEOUS EQUATION.pdf";
import linear from "./DifferentialCalculus/LINEAR EQUATIONS.pdf";
import bernoulli from "./DifferentialCalculus/BERNOULLI'S EQUATION.pdf";
import exact from "./DifferentialCalculus/EXACT DIFFERENTIAL EQUATION.pdf";
import reducible from "./DifferentialCalculus/Reducible to EXACT DIFFERENTIAL EQUATION.pdf";
import equation1 from "./DifferentialCalculus/EQUATION SOLVABLE FOR Y.pdf";
import equation2 from "./DifferentialCalculus/EQUATION SOLVABLE FOR X.pdf";
import clairauts from "./DifferentialCalculus/CLAIRAUT'S EQUATION.pdf";
import complementary from "./DifferentialCalculus/COMPLEMENTARY FUNCTION.pdf";
import complete from "./DifferentialCalculus/COMPLETE SOLUTION.pdf";
import method from "./DifferentialCalculus/method of VARIATION OF PARAMETERS.pdf";
import caughy from "./DifferentialCalculus/CAUCHY HOMOGENEOUS & LEGENDRE Linear equation.pdf";
import solution from "./DifferentialCalculus/SOLUTION OF A DIFFERENTIAL EQUATION (direct method).pdf";
import limit1 from "./DifferentialCalculus/LIMITCONTINUITY&DIFFERENTIABILITY.pdf";
import partial from "./DifferentialCalculus/PARTIALDERIVATIVES.pdf";
import euler from "./DifferentialCalculus/EULER THEOREM on homogeneous  equation.pdf";
import maxima from "./DifferentialCalculus/MAXIMA MINIMA & LAGRANGE MULTIPLIER.pdf";
import taylor from "./DifferentialCalculus/TAYLOR AND MACLAURIN SERIES for 2 variable.pdf";
import question1 from "./DifferentialCalculus/MATHS TOP 50 QUES-ANS.pdf";
function Dc() {
    const notify = () => toast("Downloading Notes For You",{autoClose:1000, transition:null});
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
    const [showPdf23, setShowPdf23] = useState(false);
    const [showPdf24, setShowPdf24] = useState(false);
    return (
        <div className="container mt-4">
            <u><h3>Topic Wise Notes Content</h3></u>
            <hr />
            <h3 className="mb-4">1. Limit</h3>
            <a href={limit}
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
                        <iframe src={limit} 
                            width="70%"
                            height="200px"
                            onLoad={() => toast.success("Notes Loaded Successully",{autoClose:1000,transition:null})}
                        ></iframe>
                    </div>
            )}
            <hr />
            <h3 className="mb-4">2. Continuity & Differential Calculus</h3>
            <a
              href={continuity}
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
                  src={continuity}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">3. Successive Differentiation</h3>
            <a
              href={successive}
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
                  src={successive}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">4. Leibnitz's Theorem</h3>
            <a
              href={leibnitz}
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
                  src={leibnitz}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">5. Differential Equation</h3>
            <a
              href={differential}
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
                  src={differential}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">6. Homogeneous Equation</h3>
            <a
              href={homogeneous}
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
                  src={homogeneous}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">7. Linear Equation</h3>
            <a
              href={linear}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={linear}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">8. Bernoulli's Equation</h3>
            <a
              href={bernoulli}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={bernoulli}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">9. Exact Differential Equation</h3>
            <a
              href={exact}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={exact}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">10. Reducible To Exact Differentiation</h3>
            <a
              href={reducible}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={reducible}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">11. Equation Solvable For Y</h3>
            <a
              href={equation1}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={equation1}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">12. Equation Solvable For X </h3>
            <a
              href={equation2}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={equation2}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">13. Clairauts Equation </h3>
            <a
              href={clairauts}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={clairauts}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">14. Complementary Function</h3>
            <a
              href={complementary}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={complementary}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">15. Complete Solution</h3>
            <a
              href={complete}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={complete}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">16. Method Of Variation of Parameters</h3>
            <a
              href={method}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={method}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">17. Caughy Homogeneous & Legendre Linear Equation</h3>
            <a
              href={caughy}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={caughy}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">18. Solution Of A Differential Equation(Direct Method)</h3>
            <a
              href={solution}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={solution}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">19. Limit Continuity & Differentiability</h3>
            <a
              href={limit1}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={limit1}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">20. Partial Derivative</h3>
            <a
              href={partial}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={partial}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">21. Euler Theorem On Homogeneous Equation</h3>
            <a
              href={euler}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={euler}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">22. Maxima, Minima & Lagrange Multiplier</h3>
            <a
              href={maxima}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
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
                  src={maxima}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">23. Taylor & Maclaurin Series For 2 Variable</h3>
            <a
              href={taylor}
              download
              className="btn btn-primary btn-lg mb-4"
              onClick={notify}
            >
              Download PDF
            </a>
            <button
              className="btn btn-success btn-lg mb-4 ms-3"
              onClick={() => setShowPdf23(!showPdf23)}
            >
              {showPdf23 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf23 && (
              <div className="mt-3">
                <iframe
                  src={taylor}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <hr />
            <h1 style={{color: "crimson"}}>@ Important Question</h1>
            <hr />
            <h3 className="mb-4">1. Maths Top 50 Question & Answer</h3>
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
              onClick={() => setShowPdf24(!showPdf24)}
            >
              {showPdf24 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf24 && (
              <div className="mt-3">
                <iframe
                  src={question1}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                  onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                ></iframe>
              </div>
            )}
            <ToastContainer position="top-center" theme="dark"/>
        </div>
    )
}
export default Dc;