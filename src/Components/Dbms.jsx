import ermodel from "./Dbms/ERModel.pdf";
import relationalmodel from "./Dbms/RelationalModel.pdf";
import functionaldependency from "./Dbms/FunctionalDependency.pdf";
import { useState } from "react";
function Dbms() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    return(

        <div className="container mt-4">
          <u><h3 >Topic Wise Notes Content</h3></u>
          <hr />
            <h3 className="mb-4">1. ER Model</h3>
            <a
              href={ermodel}
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
                  src={ermodel}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">2. Relational Model</h3>
            <a
              href={relationalmodel}
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
                  src={relationalmodel}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                ></iframe>
              </div>
            )}
            <hr />
            <h3 className="mb-4">3. Functional Dependency</h3>
            <a
              href={functionaldependency}
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
                  src={functionaldependency}
                  width="70%"
                  height="200px"
                  title="OOPS Notes"
                ></iframe>
              </div>
            )}
        </div>
    )
}
export default Dbms