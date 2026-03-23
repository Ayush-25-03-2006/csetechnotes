import probability1 from "./Probability&Statistics/PROBABILITY(SET)part1️.pdf";
import probability2 from "./Probability&Statistics/PROBABILITY(PERMUTATIONSANDCOMBINATIONS)part2.pdf";
import probability3 from "./Probability&Statistics/PROBABILITY(Basic)part3️.pdf";
import additional from "./Probability&Statistics/ADDITION THEOREMS ON PROBABILITY.pdf";
import conditional from "./Probability&Statistics/CONDITIONAL PROBABILITY AND INDEPENDENT EVENTS.pdf";
import total from "./Probability&Statistics/THEOREM OF TOTAL PROBABILITY.pdf";
import bayes from "./Probability&Statistics/BAYE'S THEOREM.pdf";
import discrete1 from "./Probability&Statistics/DISCRETE RANDOM VARIABLES & it's PROBABLY DISTRIBUTION.pdf";
import binomial from "./Probability&Statistics/BINOMIAL DISTRIBUTION & BERNOULLI TRAILS.pdf";
import binomial1 from "./Probability&Statistics/MEAN & VARIANCE of BINOMIAL DISTRIBUTION.pdf";
import poisson from "./Probability&Statistics/POISSON DISTRIBUTION.pdf";
import continous1 from "./Probability&Statistics/CONTINUOUS RANDOM VARIABLES.pdf";
import continous2 from "./Probability&Statistics/MEAN & VARIANCE of CONTINUOUS RANDOM VARIABLES.pdf";
import normal from "./Probability&Statistics/NORMAL DISTRIBUTION.pdf";
import exponential from "./Probability&Statistics/EXPONENTIAL DISTRIBUTION.pdf";
import gamma from "./Probability&Statistics/GAMMA DISTRIBUTION.pdf";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function Probability_Statistics() {
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
    const [showPdf25, setShowPdf25] = useState(false);
    const [showPdf26, setShowPdf26] = useState(false);

    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});
    return (
        <div className="container mt-4">
              <u><h3 >Topic Wise Notes Content</h3></u>
            <hr/>
              <h1># Probability</h1>
            <hr />
              <h3 className="mb-4">1. Probability Part-I</h3>

              <a
                href={probability1}
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
                    src={probability1}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">2. Probability Part-II</h3>
        
              <a
                href={probability2}
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
                    src={probability2}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">3. Probability Part-III</h3>
        
              <a
                href={probability3}
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
                    src={probability3}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">4. Aditional Theorem</h3>
        
              <a
                href={additional}
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
                    src={additional}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">5. Conditional Probability</h3>
        
              <a
                href={conditional}
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
                    src={conditional}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">6. Theorem Of Total Probability </h3>
        
              <a
                href={total}
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
                    src={probability3}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">7. Baye's Theorem</h3>
        
              <a
                href={bayes}
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
                    src={bayes}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">8. Discrete Random Variable</h3>
        
              <a
                href={discrete1}
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
                    src={discrete1}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">9. Binomial Distribution</h3>
        
              <a
                href={binomial}
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
        
              {setShowPdf9 && (
                <div className="mt-3">
                  <iframe
                    src={binomial}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">10. Mean & Variance Of Binomial Distribution</h3>
        
              <a
                href={binomial1}
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
                    src={binomial1}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">11. Poisson Distribution</h3>
        
              <a
                href={poisson}
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
                    src={poisson}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">12. Continous Random Variable</h3>
        
              <a
                href={continous1}
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
                    src={continous1}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">13. Mean & Variance Of Continous Random Variable</h3>
        
              <a
                href={continous2}
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
                    src={continous2}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">14. Normal Distribution</h3>
        
              <a
                href={normal}
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
                    src={normal}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">15. Exponential Distribution</h3>
        
              <a
                href={exponential}
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
                    src={exponential}
                    width="70%"
                    height="200px"
                    title="OOPS Notes"
                    onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
                  ></iframe>
                </div>
              )}
              <hr/>
              <h3 className="mb-4">16. Gamma Distribution</h3>
        
              <a
                href={gamma}
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
                    src={gamma}
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
export default Probability_Statistics;