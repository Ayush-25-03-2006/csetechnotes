import probability1 from "./Probability&Statistics/PROBABILITY(SET)part1️.pdf";
import probability3 from "./Probability&Statistics/PROBABILITY(Basic)part3️.pdf";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function Probability_Statistics() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);

    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});
    return (
        <div className="container mt-4">
              <u><h3 >Topic Wise Notes Content</h3></u>
            <hr/>
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
              {/* <hr/>
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
              )} */}
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
              <ToastContainer position="top-center" theme="dark"/>
            </div>
    )
}
export default Probability_Statistics;